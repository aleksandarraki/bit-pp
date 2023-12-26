var a; typeof a ;
console.log(typeof a)

var s = "1s" ;
s++;
console.log(s)

var a = "1s"
console.log(typeof a)

// Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
var a = 3 - 2 - 31;
var b = 3 * 5 - 7 / 3;
var x = 4 / 2 - 1.14 * 3;
console.log(a);
console.log(b);
console.log(x);

// How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?

var a = 4 * 1024;
var c = ( 4 * 1024 * 1024) / 98;
console.log(a);
console.log(c);

// Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?

var a = 1;
a *=2 ;
console.log(a);
var b =3;
b+=3;
console.log(b);
var c = 60;
c/=5;
console.log(c);
var d = 107;
d-=7;
console.log(d);

var ime = Aleksandar;
var age = 37;
var car = "no";
console.log( typeof ime );
console.log( typeof age );
console.log( typeof car );

// Check which type are these values: - “number” - true - null - “false” - 56

var a = "number ";
var b = true ;
var c = null ;
var d = "false";
var e = 56;
console.log( typeof a);
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)

// 13.

var p = true;
var q = true;
console.log( p&&q );
console.log( p||q );

var p = true;
var q = false;
console.log( p && q );
console.log( p || q );

var p = false;
var q = true;
console.log( p && q );
console.log( p || q );

var p = false;
var q = false;
console.log( p && q );
console.log( p || q );

// 14. 

var age = 37;
var NegativeValue = 0;
var GreaterThen = 120;
console.log( age < NegativeValue && age > GreaterThen );
console.log(age > NegativeValue);
console.log(age > GreaterThen)



// 15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If we store the current speed value in the variable speed. Write an expression which will check if we are driving drive safely or not? (true if we are driving safe and false if not)

var speed = 85;
var lowestSpeed = 60;
var highestSpeed = 120;
console.log(speed > lowestSpeed && speed < highestSpeed)