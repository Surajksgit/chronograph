

var a= parseInt(prompt('enter a intiger'));

// check a is negative
if (a < 0) {
    document.write('error accoured')
}

// check a is 0
else if
    (a ===0 )
    {
        document.write('factorial of ${a} is 1');

    }
// check a is positive
else
 {
    let fact = 1;
    for (i = 1; i <= a; i++) {
        fact *= i;
    }
    document.write(`The factorial of ${a} is ${fact}.`);
}
 