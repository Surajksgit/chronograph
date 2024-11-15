/.array with reminder of 3
var num = [1, 2, 4, 5, 6];
var remainders = num.map(function(item) {
    return item % 3; // Calculate the remainder when dividing by 3
});

console.log(num); // Output the original array
console.log(remainders); // Output the new array with remainders