//1. Write a program that calculates the maximum of two given numbers.

function getMax(a, b) {
    if (!isFinite(a) || !isFinite(b)) return "Invalid input";
    if (a > b) return a;
    if (b > a) return b;
    return "Numbers are equal";
}
var result = getMax(40, 105.5254555454);
console.log(result)

// ES6

const getMax = (n1, n2) => Math.max(n1, n2);
console.log(getMax(100, 200));

//2. Write a program that checks if a given number is odd.

function evenOrOdd(k) {
    var result = "";
    if (k % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd"
    }
    return result;
}
var result = evenOrOdd(31);
console.log(result)

// ES6

const isOdd = n => {
    let result = "";
    if (n % 2 === 0) {
        result = "no";
    } else {
        result = "yes";
    }
    return result;
}
console.log(isOdd(25442));

//3. Write a program that checks if a given number is a three digit long number.

function threeDigit(x) {
    var result = "";
    if (typeof x !== "number") {
        return "Invalid input";
    } else if (99 < x < 1000) {
        result = "Three digit number";
    } else {
        result = "Is not three digit number";
    }
    return result;
}
var result = threeDigit(100);
console.log(result)

// ES6

const numberLength = n => {
    let newNumber = n + "";
    let result = "";
    if(newNumber.length === 3) {
        result = "Number is three digit long.";
    } else {
        result = " NO";
    }
    return result;
}

console.log(numberLength(5431));

//4. Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean(a, b, c, d) {
    var result = (a + b + c + d) / 4;
    return result;
}
var result = arithmeticMean(4, 6, 8, 10);
console.log(result)

/*5. Write a program that draws a square of a given size. For example, if the size of
square is 5 the program should draw:
*****
*   *
*   *
*   *
***** */


function horChart(a,b,c,d,e) {
    let result = "";
    for( var i = 0; i < a; i++) {
        result += "*";
    }
    if(i === a){
        result += "\n";
    }
    
    for( var j = 0; j < b; j++) {
        result += "* " + " " + " ";
    }

    if (j === b) {
        result += "\n";
    }

    for ( var k = 0; k < c; k++) {
        result += "* " + " " + " ";
    }

    if (k === c) {
        result += "\n";
    }

    for ( var l = 0; l < d; l++) {
        result += "* " + " " + " ";
    }
    if (l === d) {
        result += "\n";
    }

    for( var m = 0; m < e; m++) {
        result += "*";
    }
    return result;
}

console.log(horChart(5,2,2,2,5));



// 6. Write a program that draws a horizontal chart representing three given values.
// For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *   

function horChart(a,b,c) {
    let result = "";
    for( var i = 0; i < a; i++) {
        result += "* ";
    }
    if(i === a){
        result += "\n";
    }
    
    for( var j = 0; j < b; j++) {
        result += "* ";
    }

    if (j === b) {
        result += "\n";
    }

    for ( var k = 0; k < c; k++) {
        result += "* ";
    }
    return result;
}

console.log(horChart(5,3,7));

//7. Write a program that calculates a number of digits of a given number.

function numberOfDigits(x) {
    var s = x + "";
    return s.length;
}
var s = numberOfDigits(46000);
console.log(s)

const numberOfD = x => {
    let s = x + "";
    return s.length;
};
console.log(numberOfD(6588254));

//8. Write a program that calculates a number of appearances of a given number in a given array. Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7 Result: 3

function repetition(a, e) {

    var brojač = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            brojač++;
        }

    }
    return brojač;
}
var x = repetition([2, 4, 7, 8, 7, 7, 1], 7);
console.log(x)

const calc = (a, n) => {
    let counter = 0;
    a.forEach(element => {
        if (element === n) {
            counter += 1;

        }
    });
    return counter;
};
console.log(calc([2, 4, 7, 8, 7, 7, 1], 7));


//9. Write a program that calculates the sum of odd elements of a given array. 

function sumOfOddEl(a) {
    var sum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            sum += a[i];
        }
    }
    return sum;
}

var f = sumOfOddEl([2, 1, 6, 7, 7, 7, 9, 4, 11]);
console.log(f)

const sum = a => {
    let summary = 0;
    a.forEach(element => {
        if (element % 2 === 1) {
            summary += element;

        }
    });
    return summary;
};
console.log(sum([2, 1, 6, 7, 7, 7, 9, 4, 11]));


// 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

function numberOfA(primer) {
    if (typeof primer !== "string") {
        console.log("unesite rec");
    }
    var sum = 0;
    for (i = 0; i < primer.length; i++) {
        if (primer[i] === "a") {
            sum += 1;
        }
    }
    return sum;
}
var x = numberOfA("Aleksandar");
console.log(x)

// b.

function numberOfA(primer) {
    if (typeof (primer) !== "string") {
        console.log("unesite rec");
    }
    var sum = 0;
    for (i = 0; i < primer.length; i++) {
        if (primer[i] === "a" || primer[i] === "A") {
            sum += 1;
        }
    }
    return sum;
}
var x = numberOfA("Aleksandar");
console.log(x)

const appearance = s => {
    let sumOfA = 0;
    [...s].forEach(element => {
        if (element === "a" || element === "A") {
            sumOfA += 1;
        };

    });
    return sumOfA;
};
console.log(appearance("Ananas"));


// 11. Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

function newWord(a, b) {
    if (typeof (a) !== "string") {
        return "unesi rec";
    }
    var result = "";
    for (i = 0; i < b; i++) {
        if (typeof (a) === "string") {
            result += a;
        }
    }
    return result;
}

var x = newWord("leptir", 5);
var k = newWord("Bora", 2);
console.log(x);
console.log(k)

//ES6
const concatS = (str, n) => str.repeat(n);
console.log(concatS("Bora", 2));