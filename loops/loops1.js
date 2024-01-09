// 1. Loops- While loops

var i = 0;

while ( i < 10 ) {
    console.log(i);
    i++;
}

// 2. Loops - Do-while loops

var i = 10;
do {
    i++ ;
} while ( i < 10 );
console.log(i);

var punishment = '';

for (var i = 0; i < 100; i++) {

punishment += 'I will never do this again\n';

}
console.log(punishment);

var res = '\n';
for (var i = 0; i < 5; i++) {
for (var j = 0; j < 5; j++) {
res += '*\t';
}
res += '\n';
}
console.log(res);

// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

var i = 0;
for ( var i = 0; i <= 15; i++) {
    if ( i % 2 === 0 ) {
        console.log( i + " is even");
    } else if ( i % 2 === 1) {
        console.log( i + " is odd")
    }
}


//little bit diferent
var result = "";
for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        result = `Number ${i} is even.`;
    } else if (i % 2 === 1) {
        result = `Number ${i} is odd.`;
    }
    console.log(result);
}


// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for ( var i = 0; i <= 1000; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        sum += i ;
    }
}
console.log(sum)

// 3. Write a program to compute the sum and product of an array of integers.

var array = [10, 20, 30, 40, 50];
var sum = 0;
var product = 1;
for ( i = 0; i < array.length; i++) {
    sum += array[i] ; 
    product *= array[i];
}
console.log(sum);
console.log(product);

// 4. Write a program which prints the elements of the following array as a single string.


var x = [ "1", "A", "B", "c", "r", true, NaN, undefined ] ;
var string1 = "";
for ( i = 0; i < x.length; i++) {
    string1 += x[i] + " ";
}
console.log(string1);


// 5. Write a program that prints the elements of the following array. 

var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ];
for ( i = 0; i < a.length; i++) {
    console.log(a[i]);
}


// 6. Write a program that outputs the sum of squares of the first 20 numbers.


var sum = 0;
var square = 0;
for ( var i = 0; i <=20; i++) {
    square = i * i;
    sum += square;

}
console.log(sum)

//7. Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.

var marks = [ 80, 77, 88, 95, 68 ];
var average = 0;
sum = 0;
for ( i = 0; i < marks.length; i++) {
    sum += marks[i];
} 
average = sum / marks.length ;

console.log(average)

if ( average < 60) {
    console.log("F");
} else if (average > 60 && average < 70) {
    console.log("D");
} else if (average > 70 && average < 80) {
    console.log("C");
} else if (average > 80 && average < 90) {
    console.log("B");
} else if (average > 90 && average < 100) {
    console.log("A");
}

console.log( "" )

//8. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).


for ( i = 1; i <= 100; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log( "FizzBuzz" );
    } else if ( i % 3 === 0 ) {
        console.log("Fizz");
    } else if ( i % 5 === 0 ) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}






