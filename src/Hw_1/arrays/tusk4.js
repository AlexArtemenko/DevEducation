function maxIndexArr(arr) {
  let maxValInd = arr[0];
  let maxElemIndex = 0;

  if (!Array.isArray(arr)) {
    return "Here must be array";
  }
  if (arr.length === 0) {
    return "Array is empty";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValInd) {
      maxValInd = arr[i];
      maxElemIndex = i;
    }
  }
  return maxElemIndex;
}
