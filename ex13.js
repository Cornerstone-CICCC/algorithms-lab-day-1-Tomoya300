// Exercise 13: Write a function named 'findById' that takes an array of objects and an id, and returns the object with the matching id, or null if not found.

function findById(arr, id) {
  let result
  for (i = 0; i < arr.length; i++) {
    if (arr[i].ID === id) {
      result = arr[i]
    }
  }
  return result
  // your code here
}

console.log(findById([{ ID: 1, name: 'John' }, { ID: 2, name: 'Jane' }, {ID: 3, name: `Ethan`}], 2)) // { id: 2, name: 'Jane' }

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

