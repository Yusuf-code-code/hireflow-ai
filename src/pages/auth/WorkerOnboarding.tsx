import { useState } from "react";
import Button from "../../components/ui/Button";
import { workerQuestions } from "../../data/workerQuestions";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WorkerOnboarding() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<Record<string, string[]>>({});

  const question = workerQuestions[currentQuestion];

const selectedAnswers = answers[question.id] ?? [];

const handleAnswer = (option: string) => {
  setAnswers((previous) => {
    const current = previous[question.id] ?? [];

    // Single-select question
    if (question.type === "single") {
      return {
        ...previous,
        [question.id]: [option],
      };
    }

    const alreadySelected = current.includes(option);

    // Allow deselecting an option
    if (alreadySelected) {
      return {
        ...previous,
        [question.id]: current.filter((item) => item !== option),
      };
    }

    // "Nothing specific" is exclusive
    if (option === "Nothing specific") {
      return {
        ...previous,
        [question.id]: ["Nothing specific"],
      };
    }

    // Selecting another option removes "Nothing specific"
    const withoutNothingSpecific = current.filter(
      (item) => item !== "Nothing specific"
    );

    // Respect maximum selections
    if (
      question.maxSelections &&
      withoutNothingSpecific.length >= question.maxSelections
    ) {
      return previous;
    }

    return {
      ...previous,
      [question.id]: [...withoutNothingSpecific, option],
    };
  });
};

  const handleContinue = () => {
    if (currentQuestion < workerQuestions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      return
    }
      navigate("/worker/assessment")

  };

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-2xl items-center">
        <div className="w-full">

          {/* Progress */}
          <div className="mb-10">
            <div className="mb-3 flex items-center justify-between text-sm text-zinc-500">
              <span>Question {currentQuestion + 1}</span>
              <span>{currentQuestion + 1} of {workerQuestions.length}</span>
            </div>

            <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-900">
              <div
                className="h-full rounded-full bg-white transition-all duration-300"
                style={{
                  width: `${
                    ((currentQuestion + 1) / workerQuestions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          {/* Question */}
        <AnimatePresence mode="wait">
  <motion.div
    key={question.id}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
  >
    {/* Question */}
    <div>
      <h1 className="text-4xl font-bold tracking-tight">
        {question.title}
      </h1>

      <p className="mt-3 text-zinc-400">
        {question.description}
      </p>

      {question.type === "multiple" && question.maxSelections && (
        <p className="mt-2 text-sm text-zinc-500">
          Choose up to {question.maxSelections}
        </p>
      )}
    </div>

    {/* Options */}
    <div className="mt-10 grid gap-3 sm:grid-cols-2">
      {question.options.map((option) => {
        const selected = selectedAnswers.includes(option);

        return (
          <button
            key={option}
            type="button"
            onClick={() => handleAnswer(option)}
            
            className={`rounded-xl border p-5 text-left transition-all duration-200 ${
              selected
                ? "border-white bg-white text-black"
                : "border-zinc-800 bg-zinc-950 text-white hover:border-zinc-600"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  </motion.div>
</AnimatePresence>

          {/* Navigation */}
        <div className="mt-10 flex items-center justify-between">
  <Button
    variant="secondary"
    size="md"
    disabled={currentQuestion === 0}
    onClick={() =>
      setCurrentQuestion((previous) => previous - 1)
    }
  >
    Back
  </Button>

  <Button
    size="md"
    disabled={selectedAnswers.length === 0}
    onClick={handleContinue}
   
  >
    Continue
  </Button>
</div>

        </div>
      </div>
    </main>
  );
}