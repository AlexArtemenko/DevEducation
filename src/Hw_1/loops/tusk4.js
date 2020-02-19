function getFuctOfNum(num) {
  if (!num || typeof num !== "number" || isNaN(num) || !isFinite(num)) {
    return undefined;
  }

  let res = 1;
  for (let i = 1; i < num; i++) {
    res *= i;
  }
  return res;
}
