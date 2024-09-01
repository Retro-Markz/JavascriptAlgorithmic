//factorial iteratively

function nFactrial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

console.log(nFactrial(4));

//factorial recursively

function factorial(numb) {
  if (numb === 1) return 1;
  return numb * factorial(numb - 1);
}

console.log(factorial(4));
