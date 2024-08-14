//Basic

/*
function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + "...";
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

*/

//advanced

function truncateString(str, num) {
  if (str.length > num) return str.slice(0, num > 3 ? num - 3 : num) + "...";
  return str;
}

console.log(truncateString("orange", 1));
console.log(truncateString("orange", 3));
console.log(truncateString("orange", 5));
console.log(truncateString("orange", 9));
