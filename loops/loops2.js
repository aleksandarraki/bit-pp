// 1. Write a program that checks if a given element e is in the array a. Input: e = 3, a = [5, -4.2, 3, 7] Output: yes

var e = 3;
var a = [ 5, -4.2, 3, 7 ];
result = "";
for ( i = 0; i < a.length; i++ ) {
    if ( a[i] === e ) {
        result = "yes";
} else if ( a[i] !== e ) {
    result = "no";
}
console.log(result);
} 
 

// b.

let e = 3;
let a = [5, -4.2, 18, 7];
let result = "";
for(let i = 0; i < a.length; i++) {
    if( a[i] === e ) {
        result = "yes";
    } else {
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

// functional solution

function createNewArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            newArr[i] = arr[i] * 2;
        } else if (arr[i] < 0) {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}
const a = createNewArray([-3, 11, 5, 3.4, -8]);
console.log(a);


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

// functional solution

function calculate(arr) {
    let sum = 0;
    for( let i = 0; i < arr.length; i++ ) {
        if(arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(calculate([3, 11, -5, -3, 2]));


// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side. Input array: [2, 4, -2, 7, -2, 4, 2]  Output: The array is symmetric. Input array: [3, 4, 12, 8] Output: The array isn’t symmetric. dario - objasnjenje

var arr = [2, 4, -2, 7, -2, 4, 2];
var solution = "";
for(var i = 0, j = arr.length-1; i <= j; i++, j-- ) {
    if(arr[i] = arr[j]) {
        solution = "The array is symmetric";
    } else {
        solution = "The array is not symmetric";
    }
}
console.log(solution);

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same  length. Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]  Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var firstArray = [4, 5, 6, 2];
var secondArray =  [3, 8, 11, 9];
var combinedArray = [];

for ( i = 0; i < firstArray.length; i++ ) {
        combinedArray.push(firstArray[i] , secondArray[i]);
    
}
console.log(combinedArray)

// hint 2

var a =  [4, 5, 6, 2], b = [3, 8, 11, 9], c = [];

for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
}

console.log(c);


// 8. Write a program that concatenates two arrays. Input arrays: [4, 5, 6, 2], [3, 8, 11, 9] Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var arrayA = [4, 5, 6, 2];
var arrayB = [3, 8, 11, 9];
var arrayC = arrayA.concat(arrayB);
console.log(arrayC)



// 9. Write a program that deletes a given element e from the array a. Input: e = 2, a = [4, 6, 2, 8, 2, 2] Output array: [4, 6, 8]

var a = [4, 6, 2, 8, 2, 2];
var b = [];
for ( i = 0; i < a.length; i++) {
    if ( a[i] !== 2 ) {
        b.push(a[i]);  
}
}
console.log(b)



// 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8] Output: [2, -2, 33, 78, 12, 5, 8]

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8]; 
var n = [];

for ( i = 0, j = 0; i < a.length; i++){
    if ( p > a.lenght) {
        console.log( "error");
    } else if ( i === p ) {
        n[j] = e;
        n[j+1] = a[i];
        j += 2;
    } else {
        n[j] = a[i];
        j++;
    }
}
console.log(n)