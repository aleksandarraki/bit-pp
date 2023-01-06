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
    if (array.length % 2 !== 0) {
        return true
    } else {
        return false
    }
}

console.log(checkIfOdd([1, 2, 9, 2, 1]))



