function minIndexArr(arr) {
  let minValInd = arr[0];
  let minElemIndex = 0;

  if (!Array.isArray(arr)) {
    return "Here must be array";
  }
  if (arr.length === 0) {
    return "Array is empty";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValInd) {
      minValInd = arr[i];
      minElemIndex = i;
    }
  }
  return minElemIndex;
}
