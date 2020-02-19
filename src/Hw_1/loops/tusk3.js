function findSqrt(num) {
  if (!num || typeof num !== "number" || isNaN(num) || !isFinite(num)) {
    return undefined;
  }
  let i = 0;
  while (i < num) {
    if (i * i == num) {
      return i;
    } else if (i * i > num) {
      return i;
    }
    i++;
  }
}
