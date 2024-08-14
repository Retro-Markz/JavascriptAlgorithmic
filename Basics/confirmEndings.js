//1st solution

/*
function confirmEnding(str, target) {
  return str.substr(-target.length) == target;
}

console.log(confirmEnding("Batman", "n"));

*/

function confirmEnding(str, target) {
  if (str.substr(str.length - target.length, str.length) !== target) {
    return false;
  } else {
    return true;
  }
  return str;
}

console.log(confirmEnding("He has give me a new name", "name"));
