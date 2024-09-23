// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  let result = 0
  let total= 0
  for (i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  total = result/arr.length
  return total
  // your code here
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30