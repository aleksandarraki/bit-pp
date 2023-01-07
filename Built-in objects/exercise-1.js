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


