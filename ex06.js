// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and returns a new array with only unique values, removing duplicates.

function uniqueValues(arr) {
  let result = []
  for (let k = 1; k <= 10; k++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === k) {
        result.push(arr[i])
        break
      }
    }
  }
  return result
}

console.log(uniqueValues([7, 1, 3, 2, 5, 4, 6, 3, 4, 2, 1, 7, 5])) // [1, 2, 3, 4, 5]




// const student = {
//   name: "Daniel",
//   college: "Cornerstone",
//   age: 24,
//   rollNumber: 1000,
// }

// for (let stud in student) {
//   console.log(student[stud])
// }

// console.log(student.college)

// var donuts = [
//   { type: "Jelly", cost: 1.22 },
//   { type: "Chocolate", cost: 2.45 },
//   { type: "Cider", cost: 1.59 },
//   { type: "Boston Cream", cost: 5.99 }
// ];

// for (let donu in donuts) {
//   console.log(`${donuts[donu].type} donuts cost $${donuts[donu].cost} each.`)
//   console.log(donuts[donu].type)
// }

// console.log(donuts[1].type)
