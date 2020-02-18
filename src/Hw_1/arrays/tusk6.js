function reverseArr(arr) {
  if (!Array.isArray(arr)) {
    return "Here must be array";
  }
  if (arr.length === 0) {
    return "Array is empty";
  }
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
