import type { AssessmentDimension } from "../data/assessmentQuestions";

export function getWorkStyleLabel(
  dimension: AssessmentDimension,
  score: number
) {
  if (dimension === "collaboration") {
    if (score >= 75) return "Highly collaborative";
    if (score >= 45) return "Balanced collaborator";
    return "Independent worker";
  }

  if (dimension === "independence") {
    if (score >= 75) return "Highly autonomous";
    if (score >= 45) return "Balanced autonomy";
    return "Guidance-oriented";
  }

  if (dimension === "structure") {
    if (score >= 75) return "Highly structured";
    if (score >= 45) return "Flexible structure";
    return "Highly flexible";
  }

  if (dimension === "adaptability") {
    if (score >= 75) return "Highly adaptable";
    if (score >= 45) return "Adaptable";
    return "Stability-oriented";
  }

  if (dimension === "communication") {
    if (score >= 75) return "Highly communicative";
    if (score >= 45) return "Balanced communicator";
    return "Independent communicator";
  }

  return "Balanced";
}