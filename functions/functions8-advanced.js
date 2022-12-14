// IIFE = Immediately Invoked Function Expressions


// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

var x = (function replace(arr) {
    if (arr.length >= 2) {
        var first = arr[0];
        var last = arr[arr.length - 1];
        arr[0] = last;
        arr[arr.length - 1] = first;
    }
    return arr;
})([4, 5, 11, 9]);

console.log(x)


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

var p = (function (a, b) {
    var a = 4;
    var b = 5;
    return a * b;
})();
console.log(p)

var surface = (function (a, b) {
    return a * b;
})(4, 5);

console.log(surface)


    // 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
    // number of replacements.
    // Input: prograMming
    // Output: progra**ing, 2

    (function (string) {
        var result = "";
        var count = 0;
        for (i = 0; i < string.length; i++) {
            if (string[i] === "m" || string[i] === "M") {
                result += "*";
                count++;
            } else {
                result += string[i];
            }
        }
        return console.log(result + "," + count);

    })("programMing");


// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

(function (name, surname) {
    return console.log(name + "." + surname + "@gmail.com")
})("pera", "peric");


// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28


(function (n) {
    console.log(parseInt(n));
})(034);


// 6.

// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

function filter(arr, cb) {
    var newarr = [];
    for (i = 0; i < arr.length; i++) {
        var element = arr[i];
        var isTrue = cb(element);
        if (isTrue) {
            newarr[newarr.length] = arr[i];
        }
    }
    return newarr;
}

console.log(filter([2, 8, 11, 4, 9, 3], function isOdd(e) { return e % 2 !== 0 }))