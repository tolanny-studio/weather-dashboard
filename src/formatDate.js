export const formatDate = (date) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).formatToParts(date);

  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const day = parts.find((p) => p.type === "day")?.value;
  const month = parts.find((p) => p.type === "month")?.value;

  return `${weekday}, ${day} ${month}`;
};