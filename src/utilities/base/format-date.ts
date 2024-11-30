export function getFormattedDate(): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "long",
  };
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", options);
  return formattedDate.replace(" ", ", ");
}
