// Exercise 3: Write a function named 'getFullNames' that takes an array of user objects (each with 'firstName' and 'lastName' properties) and returns an array of full names (e.g., 'John Doe'). 

function getFullNames(users) {
  let result = ""
  for (i = 0; i < users.length; i++) {
    result += users[i].firstName + " " + users[i].lastName + "\n"
  }
  return result
  // your code here
}

console.log(getFullNames([{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }])) // ['John Doe', 'Jane Doe']
