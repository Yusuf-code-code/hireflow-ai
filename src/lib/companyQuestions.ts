export type CompanyQuestionType =
  | "single"
  | "multi";

export interface CompanyQuestion {
  id: string;
  question: string;
  type: CompanyQuestionType;
  options: string[];
}

export const companyQuestions: CompanyQuestion[] = [
  {
    id: "environment",
    question: "What type of work environment do you offer?",
    type: "single",
    options: [
      "Highly collaborative",
      "Mostly independent",
      "A mix of both",
    ],
  },

  {
    id: "communication",
    question: "How does your team usually communicate?",
    type: "single",
    options: [
      "Frequent discussions",
      "Mostly async",
      "A mix of both",
    ],
  },

  {
    id: "structure",
    question: "How structured is your workplace?",
    type: "single",
    options: [
      "Highly structured",
      "Some structure",
      "Flexible",
    ],
  },

  {
    id: "adaptability",
    question: "How important is adaptability?",
    type: "single",
    options: [
      "Extremely important",
      "Important",
      "Nice to have",
    ],
  },

  {
    id: "experience",
    question: "What experience level are you primarily hiring for?",
    type: "single",
    options: [
      "Entry level",
      "Mid level",
      "Senior",
      "Mixed",
    ],
  },

  {
    id: "traits",
    question: "What kind of person tends to thrive on your team?",
    type: "multi",
    options: [
      "Team-oriented",
      "Independent",
      "Adaptable",
      "Organized",
      "Communicative",
    ],
  },
];