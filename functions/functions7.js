// 1. Why pay a fortune teller when you can just program your fortune yourself?
//Write a function named tellFortune that:
//● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
//● outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N
//kids.&quot;
//Call that function 3 times with 3 different values for the arguments.

function tellFortune (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    var future = "You will be a" +  jobTitle +  "in"  + geographicLocation  + "maried to" +  partnersName  + "with " +  numberOfChildren  + "children";
    console.log(future);
}
tellFortune(3, "lisa", 'America', "factory worker");

// 2. You know how old your dog is in human years, but what about dog years? Calculate it!
//Write a function named calculateDogAge that:
//● takes 1 argument: your puppy&#39;s age.
//● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
//● outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
//Call the function three times with different sets of values.
//Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
//years.

function calculateDogAge(a) {
    var dogAge = a / 7;
    console.log(dogAge);
}
calculateDogAge(49);
calculateDogAge(25);
calculateDogAge(30);

//b. 

function humanAge (a) {
    var human = a * 7;
    console.log(human);
}

humanAge(2);
humanAge(7);
humanAge(9);

// 3. Ever wonder how much a lifetime supply of your favorite snack is? Wonder no more!
//Write a function named calculateSupply that:
//● takes 2 arguments: age, amount per day.
//● calculates the amount consumed for rest of the life (based on a constant max age).
//● outputs the result to the screen like so: You will need NN to last you until the ripe old age of
//Call that function three times, passing in different values each time.
//Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
  }
  
  calculateSupply(30, 36);
  calculateSupply(37, 2.5);
  calculateSupply(49, 400);


  // 4. Its hot out! Lets make a converter based on the steps here.
//Create a function called celsiusToFahrenheit:
//● Store a celsius temperature into a variable.
//● Convert it to fahrenheit and output NN°C is NN°F.
//Create a function called fahrenheitToCelsius:
//● Now store a fahrenheit temperature into a variable.
//● Convert it to celsius and output NN°F is NN°C.

function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius*9)/5 + 32;
    console.log(celsius + '°C is ' + celsiusInF + '°F');
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInC = ((fahrenheit - 32)*5)/9;
    console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
  }


celsiusToFahrenheit(33);
fahrenheitToCelsius(75);
