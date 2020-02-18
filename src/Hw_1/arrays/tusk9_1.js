function BubbleSort(arr) {
  if (!Array.isArray(arr)) {
    return "Here must be array";
  }
  if (arr.length === 0) {
    return "Array is empty";
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let t = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = t;
      }
    }
  }
  return arr;
}
