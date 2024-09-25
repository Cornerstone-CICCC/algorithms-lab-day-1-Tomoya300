// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  let sample = text.split(" ")
  let result = ""
  for (i = sample.length - 1; i >= 0; i--) {
    result += sample[i] + " "
  }
  return result
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'