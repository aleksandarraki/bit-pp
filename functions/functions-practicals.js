// 1. Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false

var x = (function (string) {
    var result = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] === 5) {
            result = "true";
        } else {
            result = "false";
        }
    }
    return result;
})("1bser9re");
console.log(x)


// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”


var x = (function (string) {
    var output = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] === "J" || string[i] === "S") {
            output += "*";
        } else {
            output += string[i];
        }
    }
    return output;
})("Programming in JS is super interesting!");
console.log(x)


// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”


function insert(string, position, char) {
    var result = "";
    for (i = 0; i < string.length; i++) {
        if (i === position - 1) {
            result += char;
        }
        result += string[i];
    }
    return result;
}
console.log(insert("Goo morning", 4, "d"));



// 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”

function deleteChar(string, position) {
    var res = "";
    for (var i = 0; i < string.length; i++) {
        if (i === position) {
            continue;
        }
        res += string[i];
    }
    return res;
}
console.log(deleteChar("Goodd morning!", 3));


// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

function deleteEverySecond(arr) {
    var newarr = [];
    for (i = 0; i < arr.length; i += 2) {
        newarr[newarr.length] = arr[i];
    }
    return newarr;
}
console.log(deleteEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67]))


// 6. Write a function that replaces the elements of the given array between two positions with
// their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

const replaceElements = (arr) => {
    
    for (let i = 0; i < arr.length; i++){
        if(i >= 2 && i <= 6){
            arr[i] *= 2;
        } else {
            arr[i] = arr[i];
        }
        }
        return arr;
}
console.log(replaceElements([3, 5, 1, 8, 90, -4, 23, 1, 67]));


// 8. Write a function that sorts an array of strings by the number of appearances of the letter
// ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

function sort(arr) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i][i] === "a" || arr[i][i] === "A") {
            continue;
        }
        result[result.length] = arr[i];
    }
    return result;
}
console.log(sort(["apple", "tea", "amazing", "morning", "JavaScript"]))

