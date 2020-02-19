function sumNumerals(num) {
  if (!num || typeof num !== "number" || isNaN(num) || !isFinite(num)) {
    return undefined;
  }

  let res = 0;
  let numToStr = String(num);

  for (let i = 0; i < numToStr.length; i++) {
    res += Number(numToStr[i]);
  }
  return res;
}
