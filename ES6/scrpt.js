// 1. Write a function that capitalizes the first letter of each str argument it receives.
// Function arguments: [&#39;hello&#39;, &#39;there&#39;, &#39;ES&#39;, 6]
// Output: [&#39;Hello&#39;, &#39;There&#39;, &#39;ES&#39;]



const arr6 = ["hello", "there", "ES", 6];
const capitalize = arr6.filter(e => typeof e === "string")
.map(e => e[0].toUpperCase() + e.slice(1));
console.log(capitalize);



// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only

const products = [
    { name: "Banana", price: 120 },
    { name: "Orange", price: 100 }
];

const taxRate = 0.2;

const productFullPrice = products.map(e => {
    return {
        name: e.name,
        price: e.price * (1 + taxRate)
    };
});
console.log(productFullPrice);

const taxOnly = products.map(e => e.price * taxRate);
console.log(taxOnly);



// 3. Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]


const arr11 = [4, 6, 11, -9, 2.1];

const increasearr11 = arr11.map(e => e + 2);
console.log(increasearr11);
 
const array = [6, 8, 13, -7, 4.1]
let increaseBy1 = array.map(e => e + 1)
console.log(increaseBy1);


// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]


const arr12 = [6, 11, 9, 0, 3];

const filterarr12 = arr12.filter(e => e % 2 === 0);
console.log(filterarr12);

// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: ["compiler", "transpiler", "babel.js", "JS standard", "linter"]
// Output: ["babel.js", "JS standard"]


const arr42 = ["compiler", "transpiler", "babel.js", "JS standard"];

const filterarr42 = arr42.filter(e => e.includes("js") || e.includes("JS"));

console.log(filterarr42);




/* 6. Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
    Output: [7, 8] */


const arrInput = [1.6, 11.34, 9.23, 7, 3.11, 8];

const filterIntegger = arrInput.filter(e => Number.isInteger(e));

console.log(filterIntegger);


// 7. Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, "abc", 45, 28, 553
// Output: [45, 553]

const arg = [23, 11.5, 9, "abc", 45, 28, 553];

const filterArguments = arg.filter(e => `${e}`.includes("5") && !`${e}`.includes(".5"));

console.log(filterArguments);



// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]

const arr1 = [1.6, 11.34, 29.23, 7, 3.11, 18];

const greaterThan10 = arr => {
    const result = [];
    arr.forEach((value, index) => {
        if (value > 10) {
            result.push(index);
        };
    });
    return result;
};


console.log(greaterThan10(arr1));




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
const calculateProduct = arr => arr.reduce((acumulator,item) => acumulator *= item);
console.log(calculateProduct([2, 8, 3, 5]));





// 12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8

const max = arr => Math.max(...arr);
console.log(max([2, 7, 3, 8, 5.4]));