/*1. Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/


function findMinAndMaxAndswitch(arr) {

    var min = arr[0];
    var indexmin = 0;
    var max = arr[0];
    var indexmax = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            indexmin = i;
        } else if (arr[i] > max) {
            max = arr[i];
            indexmax = i;
        }
    }
    arr[indexmax] = min;
    arr[indexmin] = max;
    return arr;
}
console.log(findMinAndMaxAndswitch([3, 500, 12, 149, 53, 414, 1, 19]))


/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given element&#39;s value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]*/

function newArr(arr) {
    var newarr = [];
    var x = 0;
    for (i = 0; i < arr.length; i++) {
        x = arr[i] / 2 + 5;
        if (x === 0) {
            x = 20;
        }
        newarr[newarr.length] = x;
    }
    return newarr;
}

console.log(newArr([3, 500, -10, 149, 53, 414, 1, 19]))




/*6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000*/

function addSubstract(a) {
    var sum1 = 0;
    var sum2 = 0;
    for (i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum1 += i;
        } else if (i % 2 !== 0 && i <= 500) {
            sum2 += i;
        }
    }
    return (sum1 - sum2) * 12.5;
}

console.log(addSubstract(1000))


/*8.Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

function reversed(s) {
    var newstring = "";

    for (i = s.length - 1; i >= 0; i--) {
        newstring += s[i];
    }
    return newstring;
}
console.log(reversed("Belgrade Institute of Technology"))


/*9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don`t display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/

function numCombinations(a, b) {
    var res = "";
    for (var i = 1; i <= (b - a) + 1; i++) {
        for (var j = 1; j <= (b - a) + 1; j++) {
            if (i !== j) {
                res = console.log(i + "," + j);
            }
        }
    }
    return res;
}
console.log(numCombinations(1, 7));


/*10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false
*/

function isPrime(a) {
    if (a === 1) {
        return false;
    } else if (a === 2) {
        return true;
    } else {
        for (var i = 2; i < a; i++) {
            if (a % i === 0) {
                return false;
            }
        }
        return true;
    }
}
var res = isPrime(15);
console.log(res);


/*11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true
*/

function palindrome(s) {
    result = "";
    for (i = 0, j = s.length - 1; i >= 0, j >= 0; i++, j--) {
        if (s[i] === s[j]) {
            result = "true";
        } else {
            result = "false";
        }
    }
    return result;
}

console.log(palindrome("ana voli milovana"))


