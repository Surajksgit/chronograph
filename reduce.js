//Reduce with modulus of 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Use reduce to apply modulus 3 to each element and accumulate the results
const result = numbers.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue % 3);
}, 0); // Start with an initial value of 0

console.log(result); // Output the accumulated result