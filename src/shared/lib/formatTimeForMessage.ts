export const formatTimeForMessage = (date: string | number | Date): string => {
  if (!date) return " ";

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "Invalid date";

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return formatter.format(parsedDate);
};
