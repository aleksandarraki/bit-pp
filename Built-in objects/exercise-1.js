// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

function duplicates(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);

    }
    return newArr;
}
console.log(duplicates([2, 4, 7, 11, -2, 1]));

// drugi način

function duplicateElements(array) {
    var newArr = [];
    array.forEach(function (e) {
        newArr.push(e, e);
    })
    return newArr;
}
var p = duplicateElements([2, 4, 7, 11, -2, 1]);
console.log(p);


// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function removeDuplicates(array) {

    var newArray = [];
    array.forEach(function (element) {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray.sort(function (a, b) {
        return (a - b);
    });
}
var a = removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);

console.log(a);

// drugi nacin

function removeDuplicates(array) {
    return [...new Set(array)].sort(function (a, b) {
        return (a - b);
    });
}

var p = removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);
console.log(p);


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

// drugi nacin

function checkIfOdd(array) {
    return array.length % 2 !== 0;
}
console.log(checkIfOdd([1, 2, 9, 2, 1]));
console.log(checkIfOdd([1, 2, 9, 2, 1, 12, 3, 25]));

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

var shopingList = [
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "banans", price: 150 }
]

// b. Write a function that calculates the total price of your shopping list.

function totalPrice(array) {
    var total = 0;
    array.forEach(function (e) {
        total += e.price;
    });
    return total;
}
console.log(totalPrice([{ name: "apples", price: 100 }, { name: "milk", price: 80 }, { name: "bananas", price: 150 }]));

// c. Write a function that calculates the average product price of your shopping list.Print this value with the precision of three decimals.

function averagePrice(array) {
    var total = 0;
    array.forEach(function (e) {
        total += e.price;
    });
    return (total / array.length).toFixed(3);
}
console.log(averagePrice([{ name: "apples", price: 100 }, { name: "milk", price: 80 }, { name: "bananas", price: 150 }]));


// d. Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.

function nameOfMostExpencive(arr) {
    var max = arr[0];
    arr.forEach(function (e) {
        if (e.price > max.price) {
            max = e;
        }
    });
    return max.name.toUpperCase();
}
console.log(nameOfMostExpencive([{ name: "apples", price: 100 }, { name: "milk", price: 80 }, { name: "bananas", price: 150 }]));


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



// 10.   a. Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

function PointsInSpace(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};
var a = new PointsInSpace(3, 5, 1);
console.log(a);

//  b. Write a function that calculates the distance between two points in the space.

function calculateDistance(p1, p2) {
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    var c = p2.z - p1.z;
    return Math.sqrt(a * a + b * b + c * c);
}

var a = calculateDistance({ x: 3, y: 2, z: 1 }, { x: 5, y: 9, z: 4 });
console.log(a)

// c. Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.

function createArray(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(Math.round(Math.random() * number));
    }
    return arr;
}
console.log(createArray(5));


// 12. Write a function that shuffles the elements of a given array. Input: [3, 6, 11, 2, 9, 1]  Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)


function shufflesArray(array) {
    var shuffleA = array.sort(function () {
        return Math.random() - 0.5
    })
    return shuffleA;
}
console.log(shufflesArray([3, 6, 11, 2, 9, 1]));

