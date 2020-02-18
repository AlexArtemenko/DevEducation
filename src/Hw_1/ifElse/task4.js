function sumOrMultiple(a, b, c) {
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
  let sum = a + b + c;
  let multiple = a * b * c;
  if (sum > multiple) {
    return sum + 3;
  }
  if (sum < multiple) {
    return multiple + 3;
  }
}
