// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var favouriteCofee = {

    name: "Espresso",
    strength: "strong",
    flavor: "clasic",
    milk: "yes",
    sugar: "no"
}
console.log(favouriteCofee);


// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var favouriteMovie = {

    title: "Schindler's List",
    actors: {
        lead1: "Liam Neeson",
        lead2: "Ralph Fiennes",
        lead3: "Ben Kingsley"
    },
    director: "Steven Spielberg",
    genre: "drama",
    year: "1993"
}
console.log(favouriteMovie);


// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.


function create(description, programmingLanguage, git, status) {
    var project = {
        description: description,
        programming_language: programmingLanguage,
        git_repository: git,
        boolean_status: status,
        printRepo: function () {
            console.log(project.git_repository);
        },
        checkJS: function () {
            var result = "";
            if (project.programming_language === "Java Script") {
                result = "yes";
            } else {
                result = "no";
            }
            return result;
        },
        isInDev: function () {
            console.log(project.boolean_status);
        }

    }
    return project;
}
console.log(create("My project", "Java Script", "git.com", true));


// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.


function createRecepie(n, ct, com, ing, t, ins) {
    var recipe = {
        name: n,
        cuisineType: ct,
        complexity: com,
        ingridients: ing,
        time: t,
        instructions: ins,
        printIng: function () {
            console.log(recipe.ingridients)
        },
        checkIsUnder: function () {
            return recipe.time < 15;
        },
        changeCuisineType: function (newCuisineType) {
            recipe.cuisineType = newCuisineType;
        },
        deleteIngredient: function (ingredient) {
            var updatedIngredients = [];
            for (i = 0; i < recipe.ingridients.length; i++) {
                if (recipe.ingridients[i] !== ingredient) {
                    updatedIngredients[updatedIngredients.length] = recipe.ingridients[i];
                }
            }
            recipe.ingridients = updatedIngredients;
        }


    }
    return recipe;
}

var p = createRecepie("pasta", "Italian cuisine", 3, ["fusili", "garlik", "chery tomato"], 30, "U proključalu vodu...");
console.log(p);
p.printIng();
console.log(p.checkIsUnder());
p.changeCuisineType("Spanish cuisine");
console.log(p);
p.deleteIngredient("garlik");
console.log(p);


// this and constructor function

function Recepie(n, ct, com, ing, t, ins) {

    this.name = n;
    this.cuisineType = ct;
    this.complexity = com;
    this.ingridients = ing;
    this.time = t;
    this.instructions = ins
    this.printIng = function () {
        console.log(this.ingridients)
    };
    this.checkIsUnder = function () {
        return this.time < 15;
    },
        this.changeCuisineType = function (newCuisineType) {
            this.cuisineType = newCuisineType;
        };
    this.deleteIngredient = function (ingredient) {
        var updatedIngredients = [];
        for (i = 0; i < this.ingridients.length; i++) {
            if (this.ingridients[i] !== ingredient) {
                updatedIngredients[updatedIngredients.length] = this.ingridients[i];
            }
        }
        this.ingridients = updatedIngredients;
    }


}

var p = new Recepie(
    "Paprikas",
    "Madjarska kuhinja",
    2,
    ["paprika", "crni luk", "biber"],
    60,
    "Sipati vodu u lonac..."
)

// var c = p;
// c.name = "test";
// console.log(c);
// console.log(p);


var stringObj = JSON.stringify(p);
// console.log(stringObj);
var c = JSON.parse(stringObj);
console.log(c);
