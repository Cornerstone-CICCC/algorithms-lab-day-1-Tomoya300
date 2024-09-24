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

console.log(findById([{ ID: 1, name: 'John' }, { ID: 2, name: 'Jane' }, {ID: 3, name: `Ethan`}, {ID: 4, name: `Kaylee`}], 2)) // { id: 2, name: 'Jane' }


