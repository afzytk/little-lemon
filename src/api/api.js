const timeSlots = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
];

export function fetchAPI(date) {
  const seed = new Date(date).getDate();
  return timeSlots.filter((_, i) => (i + seed) % 3 !== 0);
}

export function submitAPI() {
  return true;
}
