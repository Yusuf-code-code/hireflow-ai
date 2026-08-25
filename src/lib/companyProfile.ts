export function getEnvironmentLabel(answer: string | undefined) {
  if (!answer) return "Not specified";

  if (answer === "Highly collaborative") {
    return "Collaborative";
  }

  if (answer === "Mostly independent") {
    return "Independent";
  }

  if (answer === "A mix of both") {
    return "Balanced";
  }

  return answer;
}

export function getCommunicationLabel(answer: string | undefined) {
  if (!answer) return "Not specified";

  if (answer === "Frequent discussions") {
    return "Highly communicative";
  }

  if (answer === "Mostly async") {
    return "Async-first";
  }

  if (answer === "A mix of both") {
    return "Balanced communication";
  }

  return answer;
}

export function getStructureLabel(answer: string | undefined) {
  if (!answer) return "Not specified";

  if (answer === "Highly structured") {
    return "Structured";
  }

  if (answer === "Some structure") {
    return "Moderately structured";
  }

  if (answer === "Flexible") {
    return "Flexible";
  }

  return answer;
}