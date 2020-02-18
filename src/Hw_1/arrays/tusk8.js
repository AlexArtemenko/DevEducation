function changeSecondHalfArr(arr) {
  if (!Array.isArray(arr)) {
    return "Here must be array";
  }
  if (arr.length === 0) {
    return "Array is empty";
  }

  let halfArr = arr.length / 2;
  let result = arr.splice(0, halfArr);
  return arr.concat(result);
}
