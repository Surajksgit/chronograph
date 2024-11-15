/filter negative elements
 var numbers = [1, -2, 3, -4, 5, -6, 7];
var positiveNumbers = numbers.filter(function(item) {
    return item >= 0; // Keep only non-negative numbers (0 and positive)
});

console.log(numbers); // Output the original array
console.log(positiveNumbers); // Output the filtered array with non-negative numbers