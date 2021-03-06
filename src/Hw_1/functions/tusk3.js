let arr1 = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
const arr2 = [
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];
const arr3 = [
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];
function strInNum(str) {
  if (typeof str != "string" || !str) {
    return "Error";
  }
  let strLow = str.toLowerCase();
  let arr = strLow.split(" ");
  let mainNumb = 0;
  if (arr.length == 4) {
    if (!arr1.includes(arr[0])) {
      return "Error";
    }
    if (arr[1] != "hundred") {
      return "Error";
    }
    if (!arr3.includes(arr[2])) {
      return "Error";
    }
    if (!arr1.includes(arr[3])) {
      return "Error";
    }
    switch (arr[0]) {
      case "one":
        mainNumb += 100;
        break;
      case "two":
        mainNumb += 200;
        break;
      case "three":
        mainNumb += 300;
        break;
      case "four":
        mainNumb += 400;
        break;
      case "five":
        mainNumb += 500;
        break;
      case "six":
        mainNumb += 600;
        break;
      case "seven":
        mainNumb += 700;
        break;
      case "eight":
        mainNumb += 800;
        break;
      case "nine":
        mainNumb += 900;
        break;
      default:
        break;
    }
    switch (arr[2]) {
      case "twenty":
        mainNumb += 20;
        break;
      case "thirty":
        mainNumb += 30;
        break;
      case "forty":
        mainNumb += 40;
        break;
      case "fifty":
        mainNumb += 50;
        break;
      case "sixty":
        mainNumb += 60;
        break;
      case "seventy":
        mainNumb += 70;
        break;
      case "eighty":
        mainNumb += 80;
        break;
      case "ninety":
        mainNumb += 90;
        break;
      default:
        break;
    }
    switch (arr[3]) {
      case "one":
        mainNumb += 1;
        break;
      case "two":
        mainNumb += 2;
        break;
      case "three":
        mainNumb += 3;
        break;
      case "four":
        mainNumb += 4;
        break;
      case "five":
        mainNumb += 5;
        break;
      case "six":
        mainNumb += 6;
        break;
      case "seven":
        mainNumb += 7;
        break;
      case "eight":
        mainNumb += 8;
        break;
      case "nine":
        mainNumb += 9;
        break;
      default:
        break;
    }
  } else if (arr.length == 3) {
    if (!arr1.includes(arr[0])) {
      return "Error";
    }
    if (arr[1] != "hundred") {
      return "Error";
    }
    if (!arr1.includes(arr[2])) {
      return "Error";
    }
    switch (arr[0]) {
      case "one":
        mainNumb += 100;
        break;
      case "two":
        mainNumb += 200;
        break;
      case "three":
        mainNumb += 300;
        break;
      case "four":
        mainNumb += 400;
        break;
      case "five":
        mainNumb += 500;
        break;
      case "six":
        mainNumb += 600;
        break;
      case "seven":
        mainNumb += 700;
        break;
      case "eight":
        mainNumb += 800;
        break;
      case "nine":
        mainNumb += 900;
        break;
      default:
        break;
    }
    switch (arr[2]) {
      case "one":
        mainNumb += 1;
        break;
      case "two":
        mainNumb += 2;
        break;
      case "three":
        mainNumb += 3;
        break;
      case "four":
        mainNumb += 4;
        break;
      case "five":
        mainNumb += 5;
        break;
      case "six":
        mainNumb += 6;
        break;
      case "seven":
        mainNumb += 7;
        break;
      case "eight":
        mainNumb += 8;
        break;
      case "nine":
        mainNumb += 9;
        break;
      default:
        break;
    }
  } else if (arr.length == 2) {
    if (arr1.includes(arr[0])) {
      if (arr[1] != "hundred") {
        return "Error";
      }
    } else {
      if (arr3.includes(arr[0])) {
        if (!arr1.includes(arr[1])) {
          return "Error";
        }
      } else {
        return "Error";
      }
    }
    if (arr[1] == "hundred") {
      switch (arr[0]) {
        case "one":
          mainNumb += 100;
          break;
        case "two":
          mainNumb += 200;
          break;
        case "three":
          mainNumb += 300;
          break;
        case "four":
          mainNumb += 400;
          break;
        case "five":
          mainNumb += 500;
          break;
        case "six":
          mainNumb += 600;
          break;
        case "seven":
          mainNumb += 700;
          break;
        case "eight":
          mainNumb += 800;
          break;
        case "nine":
          mainNumb += 900;
          break;
        default:
          break;
      }
    } else {
      switch (arr[0]) {
        case "twenty":
          mainNumb += 20;
          break;
        case "thirty":
          mainNumb += 30;
          break;
        case "forty":
          mainNumb += 40;
          break;
        case "fifty":
          mainNumb += 50;
          break;
        case "sixty":
          mainNumb += 60;
          break;
        case "seventy":
          mainNumb += 70;
          break;
        case "eighty":
          mainNumb += 80;
          break;
        case "ninety":
          mainNumb += 90;
          break;
        default:
          break;
      }
      switch (arr[1]) {
        case "one":
          mainNumb += 1;
          break;
        case "two":
          mainNumb += 2;
          break;
        case "three":
          mainNumb += 3;
          break;
        case "four":
          mainNumb += 4;
          break;
        case "five":
          mainNumb += 5;
          break;
        case "six":
          mainNumb += 6;
          break;
        case "seven":
          mainNumb += 7;
          break;
        case "eight":
          mainNumb += 8;
          break;
        case "nine":
          mainNumb += 9;
          break;
        default:
          break;
      }
    }
  } else if (arr.length == 1) {
    if (!arr1.includes(arr[0])) {
      if (!arr2.includes(arr[0])) {
        return "Error";
      }
    }
    switch (arr[0]) {
      case "one":
        mainNumb += 1;
        break;
      case "two":
        mainNumb += 2;
        break;
      case "three":
        mainNumb += 3;
        break;
      case "four":
        mainNumb += 4;
        break;
      case "five":
        mainNumb += 5;
        break;
      case "six":
        mainNumb += 6;
        break;
      case "seven":
        mainNumb += 7;
        break;
      case "eight":
        mainNumb += 8;
        break;
      case "nine":
        mainNumb += 9;
        break;
      case "ten":
        mainNumb += 10;
        break;
      case "eleven":
        mainNumb += 11;
        break;
      case "twelve":
        mainNumb += 12;
        break;
      case "thirteen":
        mainNumb += 13;
        break;
      case "fourteen":
        mainNumb += 14;
        break;
      case "fifteen":
        mainNumb += 15;
        break;
      case "sixteen":
        mainNumb += 16;
        break;
      case "seventeen":
        mainNumb += 17;
        break;
      case "eighteen":
        mainNumb += 18;
        break;
      case "ninety":
        mainNumb += 19;
        break;
      default:
        break;
    }
  }
  return mainNumb;
}
