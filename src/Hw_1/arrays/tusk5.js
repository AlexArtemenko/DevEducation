function sumOddNumInArr(arr) {
  if (!Array.isArray(arr)) {
    return "Here must be array";
  }
  if (arr.length === 0) {
    return "Array is empty";
  }
  let sumOddNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sumOddNum += arr[i];
    }
  }
  return sumOddNum;
}
