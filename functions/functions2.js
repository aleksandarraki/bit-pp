// 1. Write a function to check whether the `input` is a string or not. "My random string" -> true  12-> false

function check (a){

    if ( typeof(a) !== "string" ){
        return "false";
    }else if ( typeof(a) === "string"){
        return "true";
    }
}
var x = check("aksjan");
var u = check(125);
console.log(x);
console.log(u)

//  2. Write a function to check whether a string is blank or not. &quot;My random string&quot; -&gt; false  &quot; &quot; -&gt; true 12 -&gt; false  false -&gt; false

function blankString (a) {
    if ( typeof(a) === "string" && a.length === 0 ){
        console.log("true");
    } else {
        console.log("false")
    }
    
}
var q = blankString("My random string");
var u = blankString("");
var p = blankString(12);
var č = blankString(false);


// 3. Write a function that concatenates a given string n times (default is 1). "Ha" -> "Ha"    "Ha", 3  -> "HaHaHa"

function concat (a, b){
   if( typeof(a) !== "string") {
    return "false";
   } 
   var result = "";
   for ( i = 0; i < b; i++) {
    result += a;
   }
   return result;
}
var x = concat( "Ha", 3);
console.log(x)

// 4. Write a function to count the number of letter occurrences in a string. "My random string", "n" -> 2

function numOfl (a) {
    if ( typeof(a) !=="string") {
        return "unesite rec"
    }
    var sum = 0;
    for ( i = 0; i < a.length;i++){
        if ( a[i] === "n") {
            sum += 1;
        }
    }
    return sum;
}
var x = numOfl("My random string");
console.log(x)

// 5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.


function firstO (a, b) {
    var result = 0;
    for ( i = 0; i < a.length; i++){
        if ( a[i] === b){
            result = a.indexOf(b);
            return result;
        }else if ( a[i] !== b ){
            result = -1;
        }
    }
    return result;
}
console.log(firstO("kutija", "a"));
console.log(firstO("košarka" , "s"))

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.


//7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array. &quot;My random string&quot; -&gt; [&quot;M&quot;, &quot;y&quot;, null, &quot;r&quot;, &quot;a&quot;] &quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;]

// 








    