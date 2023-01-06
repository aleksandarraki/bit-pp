// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 -&gt; 54321


function reverseAnumber(n) {
    var n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverseAnumber(12345));


// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”


function alphabeticalOrder(string) {
    return string.toLowerCase().split("").sort().join("");
}
console.log(alphabeticalOrder("Webmaster"));



// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"


function alphabetizeWords(string) {
    return string.split(" ").map(function (e) { return e.split("").sort().join("") }).join(" ");
}

console.log(alphabetizeWords("Republic of Serbia"));


// 4. Write a function to split a string and convert it into an array of words.
// "John Snow" -> [ "John", "Snow" ]

function splitAstring(string) {
    return string.split(" ");
}

console.log(splitAstring("John Snow"));


// 5. Write a function to convert a string to its abbreviated form.
// "John Snow" -> "John S."


function convert(string) {
    return string.split(" ")[0] + " " + string.split(" ")[1].slice(0, 1) + ".";
}
console.log(convert("John Snow"));
