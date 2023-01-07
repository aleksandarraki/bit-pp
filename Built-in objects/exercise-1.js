// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

function duplicates(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(duplicates([2, 4, 7, 11, -2, 1]));


// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function removeDuplicates(array) {

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] === array[j]) {
                    array.splice(j, 1);

                }
            }

        }


    }
    return array;
}
var a = removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);

console.log(a);


/* 3. a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */

function checkIfOdd(array) {
    var result = "";
    if (array.length % 2 !== 0) {
        result = "true";
    } else {
        result = "false"
    }
    return result;
}
console.log(checkIfOdd([1, 2, 9, 2, 1]));


// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4


function smallerThanMid(array) {
    var count = 0;
    if (array.length % 2 === 0) {
        return "Error";
    }
    var middle = array[Math.floor(array.length / 2)];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < middle) {
            count++;
        }
    }
    return count;
}

console.log(smallerThanMid([-1, 8.1, 3, 6, 2.3, 44, 2.11]));


// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }


function find(array) {
    var min = Math.min(...array);
    var index = array.lastIndexOf(min);
    var output = { minValue: min, minLastIndex: index };
    return output;
}

console.log(find([1, 4, -2, 11, 8, 1, -2, 3]));


// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function find(array, e) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < e) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(find([2, 3, 8, -2, 11, 4], 6));


// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]


function find(array) {
    var newArr = [];
    var string = array.join(" ");
    for (var i = 0; i < array.length; i++) {
        string = array[i].toLowerCase();
        if (string.startsWith("pro")) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
console.log(find(["JavaScript", "Programming", "fun", "product"]));


// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

function filter(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

console.log(filter([2, 3, 8, -2, 11, 4], function (e) { return e % 2 === 1 }));
console.log(filter(["JavaScript", "Programming", "fun", "product"], function (e) { return e.toLowerCase().startsWith("j") }));



// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}


// 7.
// a. Write a function that checks if a given string is written in all capitals.

function checkIf(string) {
    if (string.toUpperCase() === string) {
        return "true";
    } else {
        return "false";
    }
}
console.log(checkIf("ASDFG"));
console.log(checkIf("sertzhjk"));


// b. Write a function that checks if a given string contains any digits.

function checkNumbersInString(string) {
    return /[0-9]/.test(string);
}

console.log(checkNumbersInString("wefghjkl"));
console.log(checkNumbersInString("werghj4poi"));

// c. Write a function that checks if a given string is a valid hexadecimal color.

function checkForHexaColor(string) {
    for (var i = 0; i < string.length; i++) {
        if (string.length === 7 && string[0] === "#") {
            if (string[i] === "A" || string[i] === "B" || string[i] === "C" || string[i] === "D" || string[i] === "E" || string[i] === "F" || string[i] <= 9 || string[i] >= 0) {
                return "true";
            }
        } else {
            return "false";
        }
    }
}

console.log(checkForHexaColor("sdfghjk"));
console.log(checkForHexaColor("#FF5733"));


// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.

function checkNumberInterval(n) {
    if (1900 <= n && 2018 >= n) {
        return "true";
    } else {
        return "false";
    }
}

console.log(checkNumberInterval(10000000));
console.log(checkNumberInterval(1901));


// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

function Validator(str1, str2, str3, n) {
    this.stringValidator = checkIf(str1);
    this.passwordValidator = checkNumbersInString(str2);
    this.colorValidator = checkForHexaColor(str3);
    this.yearValidator = checkNumberInterval(n);
}

var p = new Validator("ASDFG", "werghj4poi", "#FF5733", 1901);
console.log(p);


// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days



function myBirthday(birthday, today) {
    var birthday = new Date("2/6/2023");
    var today = new Date();
    var difernce = birthday.getTime() - today.getTime();
    var remainingDays = Math.round(difernce / (24 * 60 * 60 * 1000));
    return remainingDays;
}
console.log(myBirthday());


// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds