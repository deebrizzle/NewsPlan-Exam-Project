//Mon Nov 01 2021 16:27:00 GMT+0100 (Centraleuropæisk normaltid)
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