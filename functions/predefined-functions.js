/*1.Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1" , "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/

function convertArray(arr) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
        var x = parseFloat(arr[i]);
        if (isFinite(x)) {
            result[result.length] = x;
        }
    }
    return result;
}

console.log(convertArray(["1", "21", undefined, "42", "1e+3", Infinity]))


/*2.Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: “015false-2247”
*/

function skipping(arr) {
    var result = "";
    for (i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) && arr[i] !== null) {
            result += arr[i];
        }
    }
    return result;
}

console.log(skipping([NaN, 0, 15, false, -22, "", undefined, 47, null]))

/*3.Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: [15, -22, 47]
*/

function filter(arr) {
    var result = arr.filter(Boolean);
    return result;
}

console.log(filter([NaN, 0, 15, false, -22, "", undefined, 47, null]))

/* 4.Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 3
*/

function calculate(arr) {
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        var x = parseInt(arr[i]);
        if (isNaN(x) === false && x == arr[i]) {
            count++;
        }
    }
    return count;
}

console.log(calculate([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]))




/* 5.Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 2
*/


function numberOfFloats(array) {
    var i;
    var floatValue;
    var counter = 0;

    for (i = 0; i < array.length; i++) {
        floatValue = Number(array[i]);
        if (isNaN(floatValue) == false && floatValue == array[i] && !Number.isInteger(floatValue)) {
            counter++;
        }
    }

    return counter;

}

var floatCounter = numberOfFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(floatCounter)