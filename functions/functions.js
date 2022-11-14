//1. Write a program that calculates the maximum of two given numbers.

function getMax ( a, b ) {
    if ( !isFinite(a) || !isFinite(b) ) return "Invalid input";
    if ( a > b ) return a;
    if ( b > a ) return b;
    return "Numbers are equal";
}
var result = getMax ( 40, "wiefj");
console.log(result)

//2. Write a program that checks if a given number is odd.

function evenOrOdd(k) {
    var result = "";
    if ( k % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd"
    }
    return result;
}
var result = evenOrOdd(31);
console.log(result)

//3. Write a program that checks if a given number is a three digit long number.

function threeDigit(x) {
    var result = "";
    if ( typeof x !== "number" ) {
        return "Invalid input";
    } else if ( 99 < x < 1000 ) {
        result = "Three digit number";
    } else {
        result = "Is not three digit number";
    }
    return result;
}
var result = threeDigit(100);
console.log(result)

//4. Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean(a, b, c, d) {
    var result = (a + b + c + d ) / 4;
    return result;
}
var result = arithmeticMean( 4, 6, 8, 10 );
console.log(result)

/*5. Write a program that draws a square of a given size. For example, if the size of
square is 5 the program should draw:
*****
* *
* *
* *
*****
6. Write a program that draws a horizontal chart representing three given values.
For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *   */

//7. Write a program that calculates a number of digits of a given number.

function numberOfDigits(x) {
    var s = x + "";
    return s.length;
}
var s = numberOfDigits(46000);
console.log(s)

//8. Write a program that calculates a number of appearances of a given number in a given array. Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7 Result: 3

function repetition(e) {
    var string = [2, 4, 7, 8, 7, 7, 1];
    var brojač = 0;
    for ( var i = 0; i < string.length; i++) {
        if ( string[i] === e ) {
            brojač ++;
        }
       
    }
    return brojač;
}
var a = repetition(7);
console.log(a)


//9. Write a program that calculates the sum of odd elements of a given array. 

function sumOfOddEl(a) {
    var sum = 0;
    for ( i = 0; i < a.length; i++ ) {
        if ( a[i] % 2 === 1 ) {
            sum += a[i];
        }
    }
    return sum;
}

var f = sumOfOddEl([2, 1, 6, 7, 7, 7, 9, 4, 11]);
console.log(f)


// 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

function numberOfA (primer) {
    if ( typeof(primer) !== "string") {
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

function numberOfA (primer) {
    if ( typeof(primer) !== "string") {
        console.log("unesite rec");
    }
    var sum = 0;
    for ( i = 0; i < primer.length; i++){
        if ( primer[i] === "a" || primer [i] === "A"){
            sum += 1;
        }
    }
    return sum;
}
var x = numberOfA("Aleksandar");
console.log(x)


