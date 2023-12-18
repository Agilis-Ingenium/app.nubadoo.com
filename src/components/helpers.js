import moment from "moment";

export function prettyDate(date) {
  const d = new Date(date);

  const prettyDate = moment(d).format("MMMM d, YYYY");

  return prettyDate;
}

export function sportyEmoji(value) {
  var emoji;

  switch (value) {
    case "yoga":
      emoji = "🧘";
      break;
    case "running":
      emoji = "🏃‍♂️";
      break;
    case "swimming":
      emoji = "🏊";
      break;
    case "bicycling":
      emoji = "🚴";
      break;
    case "walking":
      emoji = "🚶‍♂️";
      break;
    case "dance":
      emoji = "💃";
      break;
    case "tennis":
      emoji = "🎾";
      break;
    case "hiking":
      emoji = "🥾";
      break;
    case "weightlifting":
      emoji = "🏋";
      break;
    case "jogging":
      emoji = "👟";
      break;
    case "power walking":
      emoji = "🏃";
      break;
    case "gardening":
      emoji = "🏡";
      break;
    case "inline skating":
      emoji = "⛸️";
      break;
    case "gymnastics":
      emoji = "🤸";
      break;
    case "bymnastics":
      emoji = "🤸";
      break;
    case "water aerobics":
      emoji = "🤽";
      break;
    case "strength training":
      emoji = "💪";
      break;
    case "pilates":
      emoji = "🧎🏼‍♀️";
      break;
    case "aerobic exercise":
      emoji = "🫁";
      break;
    case "other":
      emoji = "⚽";
      break;
    default:
      emoji = "😂";
  }

  return emoji;
}

export function intensityPercentage(value) {
  var percentage;

  switch (value) {
    case "low":
      percentage = 10.0;
      break;
    case "light":
      percentage = 20.0;
      break;
    case "moderate":
      percentage = 30.0;
      break;
    case "low-to-moderate":
      percentage = 40.0;
      break;
    case "moderate-intensity":
      percentage = 60.0;
      break;
    case "high":
      percentage = 70.0;
      break;
    case "high-intensity":
      percentage = 80.0;
      break;
    case "very high":
      percentage = 90.0;
      break;
    case "extreme":
      percentage = 100.0;
      break;
    case "varied":
      percentage = 50.0;
      break;
    default:
      percentage = 0.0;
  }

  return percentage;
}
