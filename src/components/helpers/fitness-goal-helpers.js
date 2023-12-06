export function randomEncourgement() {
  const encouragements = [
    "Stay focused, stay fierce!",
    "One step at a time.",
    "You're doing great!",
    "Embrace the challenges.",
    "You're unstoppable!",
    "Your goals are within reach!",
    "Progress, not perfection.",
    "Every effort counts. Keep going!",
    "Believe in yourself. You've got this!",
    "Small wins lead to big victories.",
    "Your journey, your rules!",
    "Rise and grind! Success awaits.",
    "Turn your dreams into plans.",
    "Seeds of effort blossom into success.",
    "Stay committed, stay inspired.",
    "Celebrate every milestone!",
    "You're stronger than you think.",
    "Keep pushing, keep achieving.",
    "Your goals, your rules.",
    "Focus on progress, not perfection.",
    "Chase dreams, not perfection.",
  ];

  const randomIndex = Math.floor(Math.random() * encouragements.length);
  return encouragements[randomIndex];
}

export function capitaliseAndFormat(inputString) {
  // Split the input string by underscore
  const words = inputString.split("_");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  // Join the words back together with a space
  const formattedString = capitalizedWords.join(" ");

  return formattedString;
}

export function convertImageSlug(slug) {
  slug = slug.replace(/_/g, "-");

  var imageString = "./images/goal-types/" + slug + ".jpg";

  return imageString;
}

export function goalStatement(goal) {
  switch (goal.goalType) {
    case "weight_loss":
      return "Lose " + goal.targetValue + "kg";

    case "muscle_gain":
      return "Gain " + goal.targetValue + "kg of muscle";

    case "fitness":
      return "Achieve " + goal.targetValue + "% fitness";

    case "nutrition":
      return "Maintain nutrition plan for " + goal.targetValue + " days";

    case "health":
      return "Achieve a health rating of " + goal.targetValue;

    case "other":
      return "Life goal of " + goal.targetValue + "units";
  }
}
