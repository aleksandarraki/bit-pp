
// 1. Write a program that checks if a given element e is in the array a. Input: e = 3, a = [5, -4.2, 3, 7] Output: yes


function checkIfPresent(a, e) {
    var result = "no";
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            result = "yes"
        } 
    } return result
}

var k = checkIfPresent([5, -4.2, 7], 3);
console.log(k)


// 2. Write a program that multiplies every positive element of a given array by 2. Input array: [-3, 11, 5, 3.4, -8] Output array: [-3, 22, 10, 6.8, -8]

function multiplyA (a){
    var result = [];
    for ( i = 0; i < a.length; i++ ) {
        if ( a[i] > 0 ){
            result[i] = a[i] * 2 ;
        
        } else {
            result[i] = a[i];
        
        }
    }
    return result;
}
console.log(multiplyA([-3, 11, 5, 3.4, -8]))


// 3. Write a program that finds the minimum of a given array and prints out its value and index. Input array: [4, 2, 2, -1, 6] Output: -1, 3

function findMin (a) {
    var min = a[0];
    for (i = 0; i < a.length; i++ ) {
        if ( a[i] < min ) {
            min = a[i];
    
        }
    
    }
    return `${min}, ${ a.indexOf(min)}`
    // return min + "," + a.indexOf(min);
    

}
console.log(findMin([4, 2, 2, -1, 6]));

// 4. Write a program that finds the second smallest number and prints out its value. Input array: [4, 2, 2, -1, 6] Output: 2

function secondSmallest (a) {
    var min = a[0];
    var secmin = a[0];
    for ( i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        } else if ( a[i] < secmin ){
            secmin = a[i];
        }
    }
    return secmin;
}
console.log(secondSmallest([4, 2, 2, -1, 6]))


// 5. Write a program that calculates the sum of positive elements in the array. Input array: [3, 11, -5, -3, 2] Output: 16

function sumOfP (a){
    result = 0;
    for ( i = 0; i < a.length; i++) {
        if ( a [i] > 0 ){
            result += a[i];
        }
    }
    return result;
}
console.log(sumOfP([3, 11, -5, -3, 2]))


// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side. Input array: [2, 4, -2, 7, -2, 4, 2] Output: The array is symmetric.

function checkIfSymetric(arr) {
    let output = "";
    for(let i = 0, j = arr.length-1; i <= j; i++, j--){
        if(arr[i] === arr[j]){
            output = "The array is symetric."
        } else if(arr[i] !== arr) {
            output ="No!"
        }
    }
    return output;
}
console.log(checkIfSymetric([2, 4, -2, -2, 4, 2]));

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. Input arrays: [4, 5, 6, 2], [3, 8, 11, 9] Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function interwines (a, b){
    var combined = [];

    for ( i = 0; i < a.length; i++ ) {
        combined.push(a[i], b[i]);
    }
    return combined;
} 
console.log(interwines([4, 5, 6, 2], [3, 8, 11, 9] ))


// 8. Write a program that concatenates two arrays. Input arrays: [4, 5, 6, 2], [3, 8, 11, 9] Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concat (a, b){
    var c = a.concat(b);
 return c;   
}
console.log(concat( [4, 5, 6, 2], [3, 8, 11, 9]))


// 9. Write a program that deletes a given element e from the array a. Input: e = 2, a = [4, 6, 2, 8, 2, 2] Output array: [4, 6, 8]

function deleteEl (a){
    var n = [];
    for ( i = 0; i < a.length; i++){
        if ( a[i] !== 2 ){
            n.push(a[i]);
        }
    }
    return n;
}
console.log(deleteEl( [4, 6, 2, 8, 2, 2] ))


// 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8] Output: [2, -2, 33, 78, 12, 5, 8]




function insert (arr, e, p) {
    if (p > arr.length) {
        console.log("Error");
        return arr;
    }

    var newArr = [];

    for (var i = 0, j = 0; i < arr.length; i++) {
        if(i === p){
            newArr[j] = e;
            newArr[j+1] = arr[i];
            j +=2;
        }else {
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr
}

console.log(insert(  [2, -2, 33, 12, 5, 8], 78, 3 ))





   

