export function convertToDayMonthString(date) {
  const dateArray = date.split(" ");
  const dateString = dateArray[2] + " " + dateArray[1];
  return dateString;
}

export function convertToMonthDayYearString(date) {
  const dateArray = date.split(" ");
  const dateString = dateArray[1] + " " + dateArray[2] + " " + dateArray[3];
  return dateString;
}

export function convertDateModal(date) {
  const dateArray = date.split(" ");
  let dateString = dateArray[1] + " " + dateArray[2] + " " + dateArray[0];
  const formattedDay = new Date(dateString);
  return formattedDay
}

export function convertStringDateToDateObject(date) {
  if (typeof date === "string" || date instanceof String) {
    const dateArray = date.split(/[ ,]+/);
    let dateString = dateArray[0] + " " + dateArray[1] + " " + dateArray[2];
    const formattedDay = new Date(dateString);
    return formattedDay;
  }
  return date;
}
