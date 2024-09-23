// Exercise 18: Write a function named 'fibonacci' that takes a non-negative integer 'n' and returns the 'n'th number in the Fibonacci sequence.
// Fibonacci sequence: The Fibonacci sequence is a series of numbers in which each number (called a Fibonacci number) is the sum of the two preceding ones. Typically, the sequence starts with 0 and 1. The sequence goes as follows:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// let totalNum = [0, 1]
// let fibonacciArr = [0, 1];
// function fibonacci(n) {
//   let sum = 0
//   let result = []
//   for (let i = 0; i <= n; i++) {
//     sum = totalNum[0] + totalNum[1]
//     fibonacciArr.push(sum);
//     sumNum = fibonacciArr[i] + fibonacciArr[i-1]
//     result.push(sumNum)
//   }
//   return result
// }

function fibonacchiArray(n) {
  let fib = [0, 1]
  for (i = 2; i <= n; i++) {
    // fib[i] = fib[i-1]+fib[i-2]
    fib.push(fib[i-1]+fib[i-2])
  }
  return fib[n]
}



console.log(fibonacchiArray(9))
// console.log(fibonacci(5)); // Output: 5
// console.log(fibonacci(10)); // Output: 55
