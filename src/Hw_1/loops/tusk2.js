function isSimpleNum(num) {
  if (typeof num !== "number" || !num || isNaN(num)) {
    return undefined;
  }
  if (num < 4) {
    return true;
  } else if (num % 2 == 0 || num % 3 == 0) {
    return false;
  } else {
    return true;
  }
}
