// 1. Write a program that checks if a given element e is in the array a. Input: e = 3, a = [5, -4.2, 3, 7] Output: yes

var e = 3;
var a = [ 5, -4.2, 3, 7 ];
result = "";
for ( i = 0; i < a.length; i++ ) {
    if ( a[i] === 3 ) {
        result = "yes";
} else if ( a[i] !== 3 ) {
    result = "no";
}
console.log(result);
} 
 

// b.

var e = 3;
var a = [5, -4.2, 18, 7];
result = "";
for ( i = 0; i < a.length; i++ ) {
    if ( a[i] === 3 ) {
        result = "yaes";
} else if ( a[i] !== 3 ) {
        result = "no";
}
console.log(result);
}


// 2. Write a program that multiplies every positive element of a given array by 2. Input array: [-3, 11, 5, 3.4, -8] Output array: [-3, 22, 10, 6.8, -8]

var a = [-3, 11, 5, 3.4, -8];
var output = [];

for ( i = 0; i < a.length; i++ ){
    if ( a[i] > 0 ) {
        output[i] = a[i] * 2;
    } else {
        output[i] = a[i];
    }
}
console.log(output)

// 3. Write a program that finds the minimum of a given array and prints out its value and index. Input array: [4, 2, 2, -1, 6] Output: -1, 3

var a = [4, 2, 2, -1, 6];
var min = a[0]; 

for ( i = 0; i < a.length; i++ ) {
    if ( a[i] < min ) {
        min = a[i];
        console.log(min);
    }

}
console.log(min, a.indexOf(min))

// 4. Write a program that finds the first element larger than minimum and prints out its value. Input array: [4, 2, 2, -1, 6] Output: 2

var a = [4, 2, 2, -1, 6];
var min = a[0];
var num = a[0];

for ( i = 0; i < a.length; i++) {
    if ( a[i] < min ) {
        min = a[i];
    } else if ( a[i] < num ) {
        num = a[i];
    }
}
console.log(min);
console.log(num)

// 5. Write a program that calculates the sum of positive elements in the array. Input array: [3, 11, -5, -3, 2] Output: 16

var a = [3, 11, -5, -3, 2];
sum = 0;

for ( i = 0; i < a.length; i++ ) {
    if ( a[i] > 0 ) {
        sum += a[i];
    }
}
console.log(sum)


// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side. Input array: [2, 4, -2, 7, -2, 4, 2]  Output: The array is symmetric. Input array: [3, 4, 12, 8] Output: The array isn’t symmetric.

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same  length. Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]  Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var firstArray = [4, 5, 6, 2];
var secondArray =  [3, 8, 11, 9];
var combinedArray = [];

for ( i = 0; i < firstArray.length; i++ ) {
        combinedArray.push(firstArray[i] , secondArray[i]);
    
}
console.log(combinedArray)

// 8. Write a program that concatenates two arrays. Input arrays: [4, 5, 6, 2], [3, 8, 11, 9] Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var arrayA = [4, 5, 6, 2];
var arrayB = [3, 8, 11, 9];
var arrayC = arrayA.concat(arrayB);
console.log(arrayC)


// 9. Write a program that deletes a given element e from the array a. Input: e = 2, a = [4, 6, 2, 8, 2, 2] Output array: [4, 6, 8]

var a = [4, 6, 2, 8, 2, 2];
var b = [];
for ( i = 0; i < a.length; i++) {
    if ( a[i] === 2 ) {
        delete a[i];
    }
}
console.log(b)
