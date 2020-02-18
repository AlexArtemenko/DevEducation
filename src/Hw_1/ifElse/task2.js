"use strict";

let x = 1;
let y = -1;

function coordinate(x, y) {
  if (
    !x ||
    !y ||
    typeof x === "string" ||
    typeof b === "string" ||
    isNaN(x, y) ||
    Array.isArray(x, y) ||
    (x && y) === "object" ||
    x === true ||
    y === true ||
    !isFinite(x, y)
  ) {
    return undefined;
  }

  let first = "first quarter";
  let second = "second quarter";
  let third = "third quarter";
  let four = "four quarter";

  if (x > 0 && y > 0) {
    return "first quarter";
  }
  if (x < 0 && y > 0) {
    return "second quarter";
  }
  if (x < 0 && y < 0) {
    return "third quarter";
  }
  if (x > 0 && y < 0) {
    return "four quarter";
  }
}
