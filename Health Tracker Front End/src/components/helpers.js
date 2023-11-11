import moment from 'moment';

export function prettyDate(date) {

    const d = new Date(date);

    const prettyDate = moment(d).format('MMMM d, YYYY');

    return prettyDate
}

export function sportyEmoji(value) {

    var emoji

    switch(value) {
    case "yoga":
        emoji = "🧘"
        break;
    case "running":
        emoji = "🏃‍♂️"
            break;
    case "swimming":
        emoji = "🏊"
        break;
    case "bicycling":
        emoji = "🚴"
        break;
    case "walking":
        emoji = "🚶‍♂️"
        break;
    case "dance":
        emoji = "💃"
        break;
    case "tennis":
        emoji = "🚶🎾"
        break;
    case "hiking":
        emoji = "🥾"
        break;
    case "weightlifting":
        emoji = "🏋"
        break;
    case "jogging":
        emoji = "👟"
        break;
    case "power walking":
        emoji = "🏃"
        break;
    case "gardening":
        emoji = "🏡"
        break;
    case "inline skating":
        emoji = "⛸️"
        break;
    case "gymnastics":
        emoji = "🤸"
        break;
    case "bymnastics":
        emoji = "🤸"
        break;
    case "water aerobics":
        emoji = "🤽"
        break;
    case "strength training":
        emoji = "💪"
        break;
    case "pilates":
        emoji = "🧎🏼‍♀️"
            break;
    case "aerobic exercise":
        emoji = "🫁"
        break;
    case "other":
        emoji = "⚽"
        break;
    default:
        emoji = "😂"
    }

    return emoji

}