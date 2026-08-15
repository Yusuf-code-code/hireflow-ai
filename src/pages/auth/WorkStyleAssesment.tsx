import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import {
  assessmentQuestions,
} from "../../data/assessmentQuestions";

import type { AssessmentDimension } from "../../data/assessmentQuestions";

type Scores = Record<AssessmentDimension, number>;

export default function WorkStyleAssessment() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const question = assessmentQuestions[currentQuestion];
  const selectedAnswer = answers[question.id];

  const progress =
    ((currentQuestion + (selectedAnswer !== undefined ? 1 : 0)) /
      assessmentQuestions.length) *
    100;

  const selectAnswer = (score: number) => {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: score,
    }));
  };

  const calculateScores = (): Scores => {
  const scores: Scores = {
    collaboration: 0,
    independence: 0,
    structure: 0,
    adaptability: 0,
    communication: 0,
  };

  const counts: Record<AssessmentDimension, number> = {
    collaboration: 0,
    independence: 0,
    structure: 0,
    adaptability: 0,
    communication: 0,
  };

  assessmentQuestions.forEach((item) => {
    const answer = answers[item.id];

    if (answer !== undefined) {
      scores[item.dimension] += answer;
      counts[item.dimension] += 1;
    }
  });

  Object.keys(scores).forEach((dimension) => {
    const key = dimension as AssessmentDimension;

    if (counts[key] > 0) {
      scores[key] = Math.round(
        (scores[key] / (counts[key] * 5)) * 100
      );
    }
  });

  return scores;
};

  const handleContinue = () => {
    if (selectedAnswer === undefined) return;

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      return;
    }

    const scores = calculateScores();

localStorage.setItem(
  "hireflow_assessment_scores",
  JSON.stringify(scores)
);

navigate("/dashboard");
  };

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-2xl items-center justify-center">
        <div className="w-full">

          <div className="mb-10">
            <p className="mb-3 text-sm text-zinc-500">
              HireFlow AI
            </p>

            <h1 className="text-4xl font-bold tracking-tight">
              How do you work best?
            </h1>

            <p className="mt-3 text-zinc-400">
              Help us understand your work style so we can find better matches.
            </p>
          </div>

          <div className="mb-10">
            <div className="mb-3 flex justify-between text-sm text-zinc-500">
              <span>
                Question {currentQuestion + 1} of{" "}
                {assessmentQuestions.length}
              </span>

              <span>{Math.round(progress)}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-white transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold leading-relaxed">
              {question.question}
            </h2>

            <div className="mt-8 space-y-3">
              {question.options.map((option) => {
                const selected = selectedAnswer === option.score;

                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => selectAnswer(option.score)}
                    className={`w-full rounded-xl border p-5 text-left transition ${
                      selected
                        ? "border-white bg-white text-black"
                        : "border-zinc-800 bg-zinc-950 text-zinc-200 hover:border-zinc-600"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <Button
              type="button"
              size="md"
              disabled={selectedAnswer === undefined}
              onClick={handleContinue}
            >
              {currentQuestion === assessmentQuestions.length - 1
                ? "Finish"
                : "Continue"}
            </Button>
          </div>

        </div>
      </div>
    </main>
  );
}