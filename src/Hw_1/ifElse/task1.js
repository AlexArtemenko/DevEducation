"use strict";

let a = 6;
let b = 5;

function task1(a, b) {
  let res;

  if (
    !a ||
    !b ||
    typeof a === "string" ||
    typeof b === "string" ||
    isNaN(a, b) ||
    Array.isArray(a, b) ||
    (a && b) === "object" ||
    a === true ||
    b === true ||
    !isFinite(a, b) ||
    a < 0 ||
    b < 0
  ) {
    return undefined;
  }

  if (a % 2 === 0) {
    res = a * b;
  } else {
    res = a + b;
  }
  return res;
}
