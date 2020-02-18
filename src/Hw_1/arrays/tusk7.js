function quantityOddIndexA(arr) {
  if (!Array.isArray(arr)) {
    return "Here must be array";
  }
  if (arr.length === 0) {
    return "Array is empty";
  }
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      count++;
    }
  }
  return count;
}
