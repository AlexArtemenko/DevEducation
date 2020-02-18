function sum(a, b, c) {
  if (
    !a ||
    !b ||
    !c ||
    typeof a === "string" ||
    typeof b === "string" ||
    typeof c === "string" ||
    isNaN(a || b || c) ||
    Array.isArray(a) ||
    Array.isArray(b) ||
    Array.isArray(c) ||
    typeof a == "object" ||
    typeof b == "object" ||
    typeof c == "object" ||
    a === true ||
    b === true ||
    c === true ||
    !isFinite(a) ||
    !isFinite(b) ||
    !isFinite(c)
  ) {
    return undefined;
  }

  let res = 0;
  if (a > 0) {
    res += a;
  }
  if (b > 0) {
    res += b;
  }
  if (c > 0) {
    res += c;
  }
  return res;
}
