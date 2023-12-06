export function classString(number) {
  switch (number) {
    case 0:
      return "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/70";
    case 1:
      return "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/70";
    case 2:
      return "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/70";
    case 3:
      return "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/70";
    case 4:
      return "inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/70";
    case 5:
      return "inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/70";
    case 6:
      return "inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/70";
    default:
      return "inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/70";
  }
}
