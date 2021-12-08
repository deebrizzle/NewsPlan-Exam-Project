
export function ConvertDate(date) {
  const dateArray = date.split(" ");
  const dateString = dateArray[2] + " " + dateArray[1];
  return dateString;
}

export function ConvertDateWithYear(date) {
  const dateArray = date.split(" ");
  const dateString = dateArray[1] + " " + dateArray[2] + " " + dateArray[3];
  return dateString;
}

export function ConvertDateModal(date) {
  const dateArray = date.split(" ");
  let dateString = dateArray[1] + " " + dateArray[2] + " " + dateArray[0];
  const formattedDay = new Date(dateString);
  return formattedDay
}

export function ConvertIfString(date) {
  if (typeof date === "string" || date instanceof String) {
    date.split(",");
    const dateArray = date.split(/[ ,]+/);
    let dateString = dateArray[0] + " " + dateArray[1] + " " + dateArray[2];
    const formattedDay = new Date(dateString);
    return formattedDay;
  }
  return date;
}
