// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,E, I, O, and U.

// function countVowels (string) {

//     var s = [ "a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ];
//     var sum = 0;
//     for( var i = 0; i < string.length; i++) {
//         for( var j = 0; j < s.length; j++) {
//             if ( string[i] === s[j] ){
//                 sum++;
//             }
//         }
//     }
//     return sum;
// }
// console.log(countVowels("Aleksandrija"))


// 2. Write a function that combines two arrays by alternatingly taking elements. [‘a’,’b’,’c’], [1,2,3] --> [‘a’,1,’b’,2,’c’,3]

function combineArrays(a1, a2) {
    var newArr = [];
    for (i = 0; i < a1.length || i < a2.length; i++) {
        newArr[newArr.length] = a1[i];
        newArr[newArr.length] = a2[i];
    }
    return newArr;
}
console.log(combineArrays(["a,", "b", "c"], [1, 2, 3]))


// 3. Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]


// 4. Write a function that takes a number and returns array of its digits.

function returnArrayOfDigits(number) {
    var s = "";
    var a = [];
    s += number;
    for (i = 0; i < s.length; i++) {
        a[a.length] = s[i];
    } for (i = 0; i < a.length; i++) {
        a[i] = parseInt(a[i]);
    }
    return a;

}
console.log(returnArrayOfDigits(1256552))


// 5. Write a program that prints a multiplication table for numbers up to 12.

// function multTable(n){
//    var product = 1;
//    for ( i = 1; i <= n; i++ ){
//     product = i * n;
//     res1 = console.log(n + "*" + i + "=" + product);
//    }
//    return res1;
// }
// console.log(multTable(10)) 



// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function celciusToFarenheit(C) {
    var f = (C * 9 / 5) + 32;
    return f;
}
console.log(celciusToFarenheit(32))

// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.


