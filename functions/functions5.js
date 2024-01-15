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

console.log(newArr([3, 500, -10, 0, 149, 53, 414, 1, 19]))


/* 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.  */

function grades(names,points) {
    var output = "";
  
    for (var i = 0; i < points.length; i++) {
      if (points[i] <= 50) {
          var result = "failed"
      }
      if (points[i] > 50 && points[i] <= 60) {
          result = 6
      }
      if (points[i] > 60 && points[i] <= 70) {
          result = 7
      }
      if (points[i] > 70 && points[i] <= 80){
          result = 8
      }
      if (points[i] > 80 && points[i] <= 90) {
          result = 9
      }
      if (points[i] <= 100 && points[i] > 90) {
          result = 10
      }
      output += names[i] + " " + result + "\n";
    }
    return output
  }
  
  var c = grades([ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]);
  console.log(c)
  

 /*4. Sort a previously defined array. Place its sorted values into a new array whose
values are equivalent to the first array&#39;s values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ] */

function sortArray(arr){
    let sorted = arr.sort(function(a,b){
        return a - b;
    })
    let newArr = [];
    for( i = 0; i < sorted.length; i++){
        newArr.push(sorted[i] * 2); 
    }
    return newArr;
}
console.log(sortArray([ 13, 11, 15, 5, 6, 1, 8, 12 ]));


/*5.Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ] */

function sortInDescendingOrder(arr) {
    return arr.sort(function(a,b) {
        return b - a;
    })
}

console.log(sortInDescendingOrder([ 13, 11, 15, 5, 6, 1, 8, 12 ]));


/* 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000  */

function loopMath() {
    var even = 0, odd = 0;
    for (var i = 0, j = 500; i <= 1000; i += 2, j--) {
        even += i;
        if (j % 2 === 1) {
            odd += j
        }
    }   
    var result = (even - odd) * 12.5;
    return result
}

var q = loopMath();
console.log(q)


/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
    letters) in the array and create a new string from them. Print it out in the console.
    Input: [ "M", "Anne", 12, "Steve","Joe","John","David", "Mark", true, "A" ] */

    function createString(arr) {
        var result = "";
       for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number" && arr[i].length > 2) {
            var part = arr[i][0] + arr[i][1];
            result += part;
        }
       }
       return result;
    }

    console.log(createString([ "M", "Anne", 12, "Steve","Joe","John","David", "Mark", true, "A" ]));



/*6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000*/

function addSubstract() {
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


