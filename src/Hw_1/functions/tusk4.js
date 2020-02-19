function distance(a1, b1, a2, b2) {
  if (!a1 || !b1 || !a2 || !b2) {
    return "Error";
  }

  let result = Math.sqrt((a1 - a2) * (a1 - a2) + (b1 - b2) * (b1 - b2));
  return result;
}
