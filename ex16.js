// Exercise 16: Write a function named 'sumNestedArray' that takes an array of arrays of numbers and returns the sum of all numbers.

function sumNestedArray(arr) {
  let result = 0
  for (i = 0; i < arr.length; i++) {
    for (k = 0; k < arr[i].length; k++) {
      result += arr[i][k]
    }
  }
  return result
}

console.log(sumNestedArray([[1, 2, 3], [4, 5], [6, 7, 8]])) // 36

// let array = [[1, 2, 3], [4, 5], [5, 6, 6, 7]]
// console.log(array[0].length)