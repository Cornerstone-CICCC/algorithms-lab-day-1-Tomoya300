// Exercise 15: Write a function named 'countWords' that takes a string of text and returns the number of words in the string.

function countWords(text) {
  let wordArray = text.split(" ")
  return wordArray.length
}

console.log(countWords('The quick brown fox jumps over the big black lazy dog')) // 9