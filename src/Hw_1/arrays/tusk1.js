function minValueInArray(arr) {
  if (!Array.isArray(arr)) {
    return "Here must be array";
  }
  if (arr.length === 0) {
    return "Array is empty";
  }

  let minVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minVal > arr[i]) {
      minVal = arr[i];
    }
  }
  return minVal;
}
