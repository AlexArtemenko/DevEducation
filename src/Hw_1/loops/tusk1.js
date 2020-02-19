function SumAndQuant(num) {
  if (
    !num ||
    isNaN(num) ||
    Array.isArray(num) ||
    typeof num === "object" ||
    !isFinite(num) ||
    num === true
  ) {
    return "You can enter only number";
  }

  let n = 0;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      n += i;
      count++;
    }
  }
  return `Sum ${n}, quantity ${count}`;
}
