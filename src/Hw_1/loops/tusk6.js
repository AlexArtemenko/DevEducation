function reverseNum(num) {
  if (!num || typeof num !== "number" || isNaN(num) || !isFinite(num)) {
    return undefined;
  }
  let numToStr = String(num);
  let res = "";
  for (let i = numToStr.length; i > 0; i--) {
    res += i;
  }
  return Number(res);
}
