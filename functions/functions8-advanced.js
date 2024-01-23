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

    return a * b;
})(4, 5);
console.log(p)

    // new sintax

    // const surface = ((a,b) => a * b)(4,5) 
    // console.log(surface);
    ((a, b) => console.log(a * b))(4, 5);




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
    return console.log(`${result}, ${count}`);

})("programMing");



// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

(function (name, surname) {
    return console.log(`${name}.${surname}.@gmail.com`)
})("pera", "peric");


// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28


(function (n) {
    console.log(parseInt(n));
})(034);

//new sintax

(n => console.log(parseInt(n)))(034)


/* 6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool! */

let y = (function (str,cb1,cb2){
    let result;
    if(str.length >= 6 && /[0-9]/.test(str)){
        result = cb1;
    }else {
        result = cb2;
    }
   return result();
}
)("alek23", () => "Your password is cool", () => "Your password is invalid")
console.log(y);



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


// new sintax

const arr = [2, 8, 11, 4, 9, 3];
const filterarr = arr.filter(e => e % 2 === 1);
console.log(filterarr);
