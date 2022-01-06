export function sortByString(arr, key) {
  arr.sort(function (a, b) {
    var itemA = a[key].toUpperCase(); // ignore upper and lowercase
    var itemB = b[key].toUpperCase(); // ignore upper and lowercase
    if (itemA < itemB) {
      return -1;
    }
    if (itemA > itemB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  return arr;
}

export function sortByDate(arr) {
  arr.sort(function (a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });
  return arr;
}
