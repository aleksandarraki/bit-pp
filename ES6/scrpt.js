// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]




// 9.
// a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.
// b. Write a function that prints out the names of persons older than 25.
// c. Write a function that check if there is a person older than 40.
// d. Write a function that checks if all persons are older than 20.

const persons = [
    { name: "Aleksandar", age: 35 },
    { name: "Jovana", age: 22 },
    { name: "Nikola", age: 45 },
    { name: "Sanja", age: 51 },
    { name: "Stefan", age: 19 },
    { name: "Ana", age: 23 }
];

// console.log(typeof persons);

function olderThan25() {
    persons.forEach(element => {
        if (element.age > 25) {
            console.log(element.name);
        }
    });
};

olderThan25(persons);


function over40() {
    console.log(persons.some(e => e.age > 40));
}

over40(persons);


function over20() {
    console.log(persons.every(e => e.age > 20));
}

over20(persons);


// 10. Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes
// Input: [3, -12, 4, 11]
// Output: no

// const arrOne = [3,11,9,5,6];
// const arrTwo = [3,-12,4,11];

function check(arr) {
    if (arr.every(e => e > 0)) {
        return "true";
    } else {
        return "false";
    }
};


console.log(check([3, 11, 9, 5, 6]));
console.log(check([3, -12, 4, 11]));


// 11. Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output: 48

function calculateProduct(array) {
    var product = 1;
    for (var i = 0; i < array.length; i++) {
        product *= array[i];
    }

    return product;
}

console.log(calculateProduct([2, 8, 3])); // Old way of solving this exercise


// ES6
const arr = [2, 8, 3];

const product = arr.reduce((acumulator, arrElementValue) => acumulator * arrElementValue)

console.log(product);





// 12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8

const max = arr => Math.max(...arr);
console.log(max([2, 7, 3, 8, 5.4]));