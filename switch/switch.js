// 1. Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. For input 1, output should be “Monday”.

var day = 1;
var result = "";
switch (day) {
    case 1 :
        result = "Monday" ;
        break ;
    case 2 :
        result = "Tuesday" ;
        break ;
    case 3 :
        result = "Wednesday" ;
        break ;
    case 4 :
        result = "Thursday" ;
    case 5 :
        result = "Friday" ;
        break ;
    case 6 :
        result = "Saturday" ;
        break ;
    case 7 :
        result = "Sunday" ;
        break ;
        default :
        result = "Try again" ;

  
}
console.log(result)

/* 2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”. */

var a = 1 ;
var b = 10 ;
result = "" ;
switch (a) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result =  "Wednesday";
        break;
    case 4:
        result =  "Thursday";
        break;
    case 5:
        result =  "Friday";  
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;
    default :
    result = "Input must be a number between 1 and 7"     
}
console.log(result)


/*3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be It is weekday
For input 6, output should be It is weekend
For input 12, output should be “Input must be number between 1 and 7”. */

var day = 7;
result = "";
switch (day) {
   
    case 1:
        result = "It is weekday" ;
        break;
    case 2:
        result = "It is weekday";
        break;
    case 3:
        result = "It is weekday" ;
        break;
    case 4:
        result = "It is weekday" ;
        break;
    case 5:
        result = "It is weekday" ;
        break;
    case 6:
        result = "It is weekend" ;
        break;
    case 7:
        result = "It is weekend";
        break;
        default:
            result = "Input must be number betven 1 and 7";
    
}
console.log(result)

/* 4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */

var month = 10;
result = "";
switch (month ) {
    case 1:
        result = "January";
        break;
    case 2:
        result = "February";
        break;
     case 3:
        result = "March";
        break;
    case 4:
        result = "April";
        break;
    case 5:
        result = "May";
        break;
    case 6:
        result = "June";
        break;
    case 7:
        result = "July";
        break;
    case 8:
        result = "August";
        break;
    case 9:
        result = "September";
        break;
    case 10:
        result = "October";
        break;
    case 11:
        result = "November";
        break;
    case 12:
        result ="December";
        break;
        default:
            result = "Input must be a number between 1 and 12"
}
console.log(result)

/* 5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12. */

var month = 7;
result = "";
switch (month) {
    case 12:
        result = "winter";
    case 1:
        result = "winter";
    case 2:
        result = "winter";
        break;
    case 3:
        result = "spring";
    case 4:
        result = "spring";
    case 5:
        result = "spring";
        break;
    case 6:
        result = "summer";
    case 7:
        result = "summer";
    case 8:
        result = "summer";
        break;
    case 9:
        result = "outumn";
    case 10:
        result = "outumn";
    case 11:
        result = "outumn";
        break;
        default:
            result = "Input must be a number betwen 1-12"
}
console.log( result )

/* 6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;. */


var grade = "A";
result = "";
switch ( grade ) {
    case "A":
        result = "Good job";
        break;
    case "B":
        result = "Pretty good";
        break;
    case "C":
        result = "Passed";
        break;
    case "D":
        result = "Not so good";
        break;
    case "E":
        result = "F";
        break;
        default:
            result = "Unkown"
}
console.log(result)