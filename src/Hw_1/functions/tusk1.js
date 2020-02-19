function dayOfWeek(num) {
  let day;
  if (
    !num ||
    typeof num !== "number" ||
    isNaN(num) ||
    !isFinite(num) ||
    num <= 0 ||
    num > 7
  ) {
    return "Error you can enter only number 1 - 7";
  }
  if (num == 1) {
    day = "Monday";
  } else if (num == 2) {
    day = "Tuesday";
  } else if (num == 3) {
    day = "Wednesday";
  } else if (num == 4) {
    day = "Thursday";
  } else if (num == 5) {
    day = "Friday";
  } else if (num == 6) {
    day = "Saturday";
  } else if (num == 7) {
    day = "Sunday";
  }

  return day;
}
