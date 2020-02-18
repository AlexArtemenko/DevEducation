"use strict";

function getStudentRating(num) {
  if (
    typeof num === "string" ||
    !num ||
    !isFinite(num) ||
    isNaN(num) ||
    typeof num === "object" ||
    Array.isArray(num) ||
    num === true
  ) {
    return undefined;
  }

  if (num >= 0 && num <= 19) {
    return "F";
  }
  if (num >= 20 && num <= 39) {
    return "E";
  }
  if (num >= 40 && num <= 59) {
    return "D";
  }
  if (num >= 60 && num <= 74) {
    return "C";
  }
  if (num >= 75 && num <= 89) {
    return "B";
  }
  if (num >= 90 && num <= 100) {
    return "A";
  }
}
