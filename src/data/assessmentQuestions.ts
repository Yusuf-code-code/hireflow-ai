export type AssessmentDimension =
  | "collaboration"
  | "independence"
  | "structure"
  | "adaptability"
  | "communication";

export interface AssessmentQuestion {
  id: string;
  question: string;
  dimension: AssessmentDimension;
  options: {
    label: string;
    score: number;
  }[];
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "collaboration",
    question: "How do you prefer to work?",
    dimension: "collaboration",
    options: [
      { label: "Mostly independently", score: 1 },
      { label: "A mix of both", score: 3 },
      { label: "Mostly with a team", score: 5 },
    ],
  },
  {
    id: "structure",
    question: "How do you prefer your work to be organized?",
    dimension: "structure",
    options: [
      { label: "I like clear instructions and structure", score: 5 },
      { label: "Some structure with flexibility", score: 3 },
      { label: "I prefer figuring things out myself", score: 1 },
    ],
  },
  {
    id: "adaptability",
    question: "How do you feel about unexpected changes?",
    dimension: "adaptability",
    options: [
      { label: "I prefer things to stay predictable", score: 1 },
      { label: "I can adapt when needed", score: 3 },
      { label: "I enjoy changing situations", score: 5 },
    ],
  },
  {
    id: "independence",
    question: "How much freedom do you like in your work?",
    dimension: "independence",
    options: [
      { label: "I prefer close guidance", score: 1 },
      { label: "A balance works best", score: 3 },
      { label: "I want lots of autonomy", score: 5 },
    ],
  },
  {
    id: "communication",
    question: "How do you prefer receiving feedback?",
    dimension: "communication",
    options: [
      { label: "Only when something needs attention", score: 1 },
      { label: "Regular feedback", score: 3 },
      { label: "Frequent discussion and feedback", score: 5 },
    ],
  },
];