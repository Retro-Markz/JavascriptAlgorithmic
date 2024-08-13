//1st solution

/*
function factorializeNum(num) {
  var result = 1;
  for (var i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}



function factorializeNum(num) {
  if (num == 0) {
    return 1;
  }

  return num * factorializeNum(num - 1);
}

*/

function factorializeNum(num) {
  for (var a = 1; num >= 1; num--) {
    a *= num;
  }
  return a;
}

console.log(factorializeNum(5));
console.log(factorializeNum(10));
console.log(factorializeNum(20));
console.log(factorializeNum(0));
