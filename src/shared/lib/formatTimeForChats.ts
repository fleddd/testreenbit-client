export const formatTimeForChats = (date: string | number | Date): string => {
  if (!date) return "";

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return " ";

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return formatter.format(parsedDate);
};
