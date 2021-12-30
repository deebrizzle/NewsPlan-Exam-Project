export function groupBy(arr, key) {
  const newArr = arr.reduce(function (acc, currVal) {
    if (!acc[currVal[key]]) {
      acc[currVal[key]] = [];
    }
    acc[currVal[key]].push(currVal);
    return acc;
  }, {});
  return newArr;
}
