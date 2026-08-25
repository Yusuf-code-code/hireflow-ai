import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { companyQuestions } from "../../lib/companyQuestions";


export default function CompanyOnboarding() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<
    Record<string, string | string[]>
  >({});

  const question = companyQuestions[currentQuestion];

  const isLastQuestion =
    currentQuestion === companyQuestions.length - 1;

  const currentAnswer = answers[question.id];

  const handleSingleSelect = (option: string) => {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: option,
    }));
  };

  const handleMultiSelect = (option: string) => {
    const previousAnswers = Array.isArray(currentAnswer)
      ? currentAnswer
      : [];

    const alreadySelected = previousAnswers.includes(option);

    const updatedAnswers = alreadySelected
      ? previousAnswers.filter((item) => item !== option)
      : [...previousAnswers, option];

    setAnswers((previous) => ({
      ...previous,
      [question.id]: updatedAnswers,
    }));
  };

  const handleContinue = () => {
    if (!currentAnswer) {
      return;
    }

    if (Array.isArray(currentAnswer) && currentAnswer.length === 0) {
      return;
    }

    if (isLastQuestion) {
      localStorage.setItem(
        "hireflow_company_profile",
        JSON.stringify(answers)
      );

      navigate("/company/dashboard");
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
  };

  const handleBack = () => {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion((previous) => previous - 1);
  };

  const progress =
    ((currentQuestion + 1) / companyQuestions.length) * 100;

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-2xl items-center justify-center">
        <div className="w-full">

          {/* Header */}
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm text-zinc-500">
              HireFlow AI
            </p>

            <h1 className="text-3xl font-bold tracking-tight">
              Tell us about your company
            </h1>

            <p className="mt-3 text-zinc-400">
              This helps us find people who fit your environment.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-10">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-zinc-500">
                Question {currentQuestion + 1} of{" "}
                {companyQuestions.length}
              </span>

              <span className="text-zinc-500">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">

            <p className="text-2xl font-semibold leading-relaxed">
              {question.question}
            </p>

            <div className="mt-8 space-y-3">
              {question.options.map((option) => {
                const selected = Array.isArray(currentAnswer)
                  ? currentAnswer.includes(option)
                  : currentAnswer === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      question.type === "multi"
                        ? handleMultiSelect(option)
                        : handleSingleSelect(option)
                    }
                    className={`w-full rounded-lg border px-5 py-4 text-left transition ${
                      selected
                        ? "border-white bg-white text-black"
                        : "border-zinc-800 bg-black text-zinc-300 hover:border-zinc-600 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>

                      {question.type === "multi" && (
                        <span className="text-xs">
                          {selected ? "Selected" : "Select"}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex items-center justify-between gap-4">

              <Button
                type="button"
                size="md"
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="border border-zinc-800 bg-transparent text-white"
              >
                Back
              </Button>

              <Button
                type="button"
                size="md"
                onClick={handleContinue}
                disabled={
                  !currentAnswer ||
                  (Array.isArray(currentAnswer) &&
                    currentAnswer.length === 0)
                }
              >
                {isLastQuestion ? "Finish" : "Continue"}
              </Button>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}