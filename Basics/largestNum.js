//Basic solution

var numArr = [
  [583, 999, 113, 55],
  [600, 187, 798, 444],
  [1023, 77, 832, 285],
  [83, 99, 112, 555],
];

/*
function largertsOfFour(arr) {
  var result = [];
  for (var n = 0; n < arr.length; n++) {
    var largertsNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largertsNumber) {
        largertsNumber = arr[n][sb];
      }
    }
    result[n] = largertsNumber;
  }
  return result;
}


function largertsOfFour(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}

*/

function largertsOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largertsOfFour(numArr));
