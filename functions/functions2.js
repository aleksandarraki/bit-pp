// 1. Write a function to check whether the `input` is a string or not. "My random string" -> true  12-> false

function check(a) {

    if (typeof (a) !== "string") {
        return "false";
    } else if (typeof (a) === "string") {
        return "true";
    }
}
var x = check("aksjan");
var u = check(125);
console.log(x);
console.log(u)

//  2. Write a function to check whether a string is blank or not. &quot;My random string&quot; -&gt; false  &quot; &quot; -&gt; true 12 -&gt; false  false -&gt; false

function blankString(a) {
    if (typeof (a) === "string" && a.length === 0) {
        console.log("true");
    } else {
        console.log("false")
    }

}
var q = blankString("My random string");
var u = blankString("");
var p = blankString(12);
var č = blankString(false);


// 3. Write a function that concatenates a given string n times (default is 1). "Ha" -> "Ha"    "Ha", 3  -> "HaHaHa"

function concat(str, n) {
    if (typeof (str) !== "string") {
        return "false";
    }
    var result = "";
    for (i = 0; i < n; i++) {
        result += str;
    }
    return result;
}
var x = concat("Ha", 3);
console.log(x)

// 4. Write a function to count the number of letter occurrences in a string. "My random string", "n" -> 2

function numOfl(str) {
    if (typeof (str) !== "string") {
        return "unesite rec"
    }
    var sum = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === "n") {
            sum += 1;
        }
    }
    return sum;
}
var x = numOfl("My random string");
console.log(x)

// 5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.


function firstO(a, b) {
    var result = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] === b) {
            result = i + 1;
            return result;
        } else if (a[i] !== b) {
            result = -1;
        }
    }
    return result;
}
console.log(firstO("kutija", "u"));
console.log(firstO("košarka", "s"))

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

function lastOccurrence(s, c) {
    var result = 0;
    for (i = s.length - 1; i > 0; i--) {
        if (s[i] === c) {
            result = i + 1;
            return result;
        } else if (s[i] !== c) {
            result = -1;
        }
    }
    return result;
}
var x = lastOccurrence("kutija", "j");
var q = lastOccurrence("šibica", "r")
console.log(x)
console.log(q)



/*7.Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" -> ["M", "y", null, "R", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/

function strToarr(s) {
    var arr = [];
    for (i = 0; i < s.length; i++) {
        arr[i] = s[i];
        if (s[i] === " ") {
            arr[i] = "null";
        }
    }
    return arr;
}
var x = strToarr("My random string");
var q = strToarr("Random");
console.log(x)
console.log(q)


/*8.Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/

function isPrime(num) {
    if (num <= 1) {
        return false;
    } if (num === 2) {
        return true;
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(1))


// 9. Write a function that replaces spaces in a string with provided separator. If separator is notprovided, use “-” (dash) as the default separator.

function replaceSpace(string, sep) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        var element = string[i];
        if (element === " ") {
            newString += sep;
        } else {
            newString += element;
        }
    }

    return newString;
}
console.log(replaceSpace("My random string", "_"))


//  10. Write a function to get the first n characters and add “...” at the end of newly created string.



function smallerString(string, stringxs) {
    var newstring = "";
    for (i = 0; i < string.length; i++) {
        var x = string[i];
        newstring += x;
        if (i === stringxs - 1) {
            newstring += "...";
            break;
        }
    }
    return newstring;
}

var result = smallerString("This string must be shorter", 11);
console.log(result)


/*11.Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] ->; [1, 21, 42, 1000]
*/

function convertArr(arr) {
    var newarr = [];
    for (i = 0; i < arr.length; i++) {
        var x = parseFloat(arr[i]);
        if (isFinite(x)) {
            newarr[newarr.length] = x;
        }
    }
    return newarr;
}
var result = convertArr(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(result)



/*12.Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.
*/

function pension(godinaRođenja, tekućaGodina, pol) {
    if (pol === "m") {
        var result = 65 - (tekućaGodina - godinaRođenja);
        if (result <= 0) {
            result = "already retired";
        } else if (pol === "w") {
            var result = 60 - (tekućaGodina - godinaRođenja);
            if (result <= 0) {
                result = "already retired";
            }
        }
    }
    return result;
}
console.log(pension(1954, 2022, "m"))







