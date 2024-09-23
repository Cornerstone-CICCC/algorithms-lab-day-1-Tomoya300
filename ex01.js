// Exercise 1: Write a function named 'sumPrices' that takes an array of product objects (each with a 'price' property) and returns the total sum of all prices.



function sumPrices(products) {
  let sum = 0
  for (i = 0; i < products.length; i++) {
    sum += products[i].price
  }
  return sum

  // your code here
}

console.log(sumPrices([{ price: 10 }, { price: 20 }, { price: 30 }])) // 60

