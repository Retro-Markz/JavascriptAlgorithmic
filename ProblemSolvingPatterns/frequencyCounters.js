//this patttern uses objects or sets to collect values/frequencies of values
//this can often avoid the need for nested lops or O(n^2) operations with arrays/strings

//examples

/*
Write a function called same, wich accepts two arrays.
the function should return true if every value in the array has it's corresponding 
value squared in the second array.
the frecuency of the values must be the same
*/

//first see the 'not the best slution for this case',

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 4, 3], [1, 4, 9]));
console.log(same([1, 2, 3, 1], [1, 4, 1, 9]));
