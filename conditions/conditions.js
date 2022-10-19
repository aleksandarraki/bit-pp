// 1. Write a program that compares two numbers and display the larger. Result should be displayed in the console.

var a = 6;
var b = 8;
if (a > b) {
    console.log(a);
} else if(b > a) {
    console.log(b);
}


// 2. Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.

var number = 4;
var result = ""
if ( number % 2 === 0) {
    result = "even"
} else {
    result = "odd"
}
console.log(result)


// 3. Write a program to check if the number is divisible by 3 and 5. If it is, print that number. Sample numbers: 15, 12 (check one at the time) Output: 15

var a = 15
if ( a % 3 === 0 && a % 5 === 0 ) {
    console.log(a)
}

var a = 12;
if ( a % 3 === 0 && a % 5 === 0) {
    console.log(a)
}


// 4. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign. Sample numbers: 3, -7, 2

var a = 3;
var b = -7;
var c = 2;
var result = ""
if ( a * b * c < 0 ) {
    result = "-"
} else if ( a * b * c > 0 ) {
    rezult = "+"
}
console.log(result)


// 5. Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X” Sample numbers: 10 | 7 (check one at the time)

var a = 10;
var result = ""
if ( typeof a === "number" && a % 2 === 0 ) {
    result = "5";
} else if ( typeof a === "number" && a % 2 === 1 ) {
    result = "X"
}
console.log(result)

var b = 7;
var result ="";
if ( typeof b === "number" && b % 2 === 0) {
    result = " number id divisible by 2";
} else if ( typeof b === "number" && b % 2 === 1) {
    result = "X"
}
console.log( result ); 


// 6. Write a conditional statement to find the largest of five numbers. Display the result in console. Sample numbers: -5, -2, -6, 0, -1

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
if ( a > b && a > c && a > d && a > e ) {
    console.log(a);
} else if ( b > a && b > c && b > d && b > e ) {
    console.log(b);
} else if ( c > a && c > b && c > d && c > e ) {
    console.log(c);
} else if ( d > a && d > b && d > c && d > e ) {
    console.log(d);
} else if ( e > a && e > b && e > c && e > d ) {
    console.log(e);
}

// 7. Write a conditional statement to print three numbers as sorted number list.Sample numbers : 0, -1, 4

var a = 0 ;
var b = 1 ;
var c = 4 ;
if ( a > b && b > c) {
    console.log( a, b, c );
} else if ( b > a && a > c ) {
    console.log( b, a, c );
} else if ( c > a && a > b) {
    console.log( c, a, b );
} else if ( c > b && b > a) {
    console.log( c, b, a );
}

// 8. Task 5. Write a program that compares two numbers and displays the larger. Display the result inthe console.

var number1 = 562;
var number2 = -99999;
if ( number1 > number2 ) {
    console.log(number1);
} else if ( number2 > number1 ) {
    console.log(number2);
}

// 9. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] Sample Input: 60°C

var c = 60;
f = 0;
result = "";
if ( f = ( 9 * c / 5 ) + 32 ) {
    result = c + "°C" + "is" + f + "°F"
}
console.log(result);

// 10. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13. Sample Input: 11 Sample Input: 32

var a = 11;
var b = 13;
if ( a > b ) {
    console.log( (a - b ) * 2 );
} else {
    console.log( b - a )
}

//b

var a = 32;
var b = 13;
if( a > b ) {
    console.log( ( a - b ) * 2 );
} else {
    console.log( b - a );
}

// 11. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. Sample Input: 12,5 Sample Input: 8,8

var a = 12;
var b = 5;
var result = "";
if ( a === b ) {
    result = ( a + b ) * 3;
} else if ( a !== b ){
    result = a + b ;
}
console.log(result);

// b.

var a = 8;
var b = 8;
var result = "";
if ( a === b ) {
    result = ( a +b ) * 3;
} else if ( a !== b ) {
    result = a + b ;
}
console.log(result);

// 12.  Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

var a = 5;
var b = 54;
var result = "";
if ( a === 50 || b === 50 || a + b === 50) {
    result = "true"
}
console.log( result );

var a = 6;
var b = 50;
var result = "";
if ( a === 50 || b === 50 || a + b === 50) {
    result = "true"
}
console.log( result );

var a = 40;
var b = 10;
var result = "";
if ( a === 50 || b === 50 || a + b === 50) {
    result = "true"
}
console.log( result );

// 13.  Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs. Sample Input: 13 Sample Input: 34 Sample Input: 256

var a = 13;
result = "";
if ( a >=20 && a <= 100 ) {
    result = "20<=>100";
} else if ( a >=100 && a <=400) {
    result = "100<=>400"
}
console.log(result);

var a = 34;
result = "";
if ( a >=20 && a <= 100 ) {
    result = "20<=>100";
} else if ( a >=100 && a <=400) {
    result = "100<=>400"
}
console.log(result);

var a = 256;
result = "";
if ( a >=20 && a <= 100 ) {
    result = "20<=>100";
} else if ( a >=100 && a <=400) {
    result = "100<=>400"
}
console.log(result);