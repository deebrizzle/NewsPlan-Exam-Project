//Mon Nov 01 2021 16:27:00 GMT+0100 (Centraleuropæisk normaltid)
export function ConvertDate(date) {
    const dateArray = date.split(" ");
    const dateString = dateArray[2] + " " + dateArray[1];
    return dateString;
  }

export function ConvertDateWithYear(date) {
  const dateArray = date.split(" ");
  const dateString = dateArray[2] + " " + dateArray[1] + " " + dateArray[3];
  return dateString;
}