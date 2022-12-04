/* 2.Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, "", undefined, 47, null]
*/

function joinIntoString(arr) {
    result = "";
    for (i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) && arr[i] !== null) {
            result += arr[i];
        }
    }
    return result;
}
console.log(joinIntoString([NaN, 0, 15, false, -22, "", undefined, 47, null]))


/*3.Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47]*/

function filter(arr) {

    var result = arr.filter(Boolean);
    return result;
}
console.log(filter([NaN, 0, 15, false, -22, "", undefined, 47, null]))


/*4.Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number*/

function reverseNumber(num) {
    var temporarystring = num + "";
    var resuslt = "";
    for (i = temporarystring.length - 1; i >= 0; i--) {
        resuslt += temporarystring[i];

    }
    return parseInt(resuslt);
}
console.log(reverseNumber(12345))


/*5.Write a function to get the last element of an array. Passing a parameter "n" will return the
last "n"; elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]*/

function lastElement(arr) {
    result = "";
    if (i = arr.length - 1) {
        result += arr[i];
    }
    return parseInt(result);
}
console.log(lastElement([7, 9, 0, 2]))

// b. 

function returnLastn(arr, n) {
    var result = [];
    for (i = arr.length - n; i < arr.length; i++) {
        result[result.length] = arr[i];
    }
    return result;

}
console.log(returnLastn([7, 9, 0, -2], 3))


/*6.Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" ["none", "none"]
2 -> [null, null]
*/

function create(n, element) {
    result = [];
    if (typeof element === "undefined") {
        element = null;
    }
    for (i = 0; i < n; i++) {
        result[result.length] = element;
    }
    return result;
}
console.log(create(6, 0))
console.log(create(2, "none"))
console.log(create(2))


/*7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/

function perfectNumber(n) {
    var arrOfDivisors = [],
        result = 0;
    for (var i = 0; i < n; i++) {
        if (n % i === 0 && i > 0) {
            arrOfDivisors[arrOfDivisors.length] = i;
        }
    }
    for (var j = 0; j < arrOfDivisors.length; j++) {
        result += arrOfDivisors[j];
    }
    return result === n;
}
console.log(perfectNumber(28));


/*8.Write a function to find a word within a string.
"The quick brown fox", "fox" -> "fox" was found 1 times"
"aa bb cc dd aa", "aa" -> "aa" was found 2 times"
*/

function wordCount(string, word) {

    var apperances = 0,
        res = "";

    for (i = 0; i < string.length; i++) {
        if (string[i] === word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (string[j] === word[j - i]) {
                    res += string[j];
                }
                if (res === word) {
                    apperances++;
                }
            }
            res = "";
        }
    }
    return word + "," + apperances;
}

console.log(wordCount('The quick brown fox', 'fox'));
console.log(wordCount('aa, bb, cc, dd, aa', 'aa'));




