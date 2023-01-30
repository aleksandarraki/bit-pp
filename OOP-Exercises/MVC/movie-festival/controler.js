var festival = new Festival();


var createMovieButton = document.getElementById("createMovie");
var createProgramButton = document.getElementById("createProgram");
var addMovieToProgramButton = document.getElementById("addMovie");
var inputTitleElement = document.getElementById("title");
var inputLengthElement = document.getElementById("length");
var selectGenreElement = document.getElementById("genre");
var movieErrorElement = document.getElementById("movieError");
var ulMovieListElement = document.getElementById("movieList");
var inputDateElement = document.getElementById("date");
var programErrorElement = document.getElementById("programError");
var ulProgramListElement = document.getElementById("programList");
var selectMovieElement = document.getElementById("selectMovie");
var selectProgramElement = document.getElementById("selectProgram");
var addMovieErrorElement = document.getElementById("addMovieError");


// colect data from user

function addMovie() {
    var titleValue = inputTitleElement.value;
    var lehgthValue = inputLengthElement.value;
    var genreValue = selectGenreElement.value;

    // validation

    if (!titleValue) {
        movieErrorElement.textContent = "Please insert title";
        return;
    }

    if (isNaN(lehgthValue)) {
        movieErrorElement.textContent = "Insert numerical value";
        return;
    }

    if (!genreValue) {
        movieErrorElement.textContent = "Select genre";
        return;
    }

    movieErrorElement.textContent = "";

    //create movie instance and add it to festival instance

    var movie = new Movie(titleValue, lehgthValue, genreValue);
    festival.movieList.push(movie);


    //add movie to DOM movie list

    var movieDataLi = document.createElement("li");
    movieDataLi.textContent = movie.getData();
    ulMovieListElement.appendChild(movieDataLi);

    //create new movie DOM select option
    var movieOption = document.createElement("option");
    movieOption.textContent = movie.title;
    var index = festival.movieList.length - 1;
    movieOption.setAttribute("value", index);
    selectMovieElement.appendChild(movieOption);

    // clear inputs
    inputTitleElement.value = "";
    inputLengthElement.value = "";
    selectGenreElement.value = "";

}

function addProgram() {
    //colect data from user

    var dateInputValue = inputDateElement.value;

    // validation

    if (!dateInputValue) {
        programErrorElement.textContent = "Select date";
        return;
    }

    var date = new Date(dateInputValue);

    if (date.getTime() < Date.now()) {
        programErrorElement.textContent = "Invalid date";
        return;
    }


    // var hasProgramWithSameDate = festival.programList.some(function (program) {
    //     return date.getTime() === program.date.getTime();
    // });

    // if (hasProgramWithSameDate) {
    //     programErrorElement.textContent = "Program for the same date already exists.";
    //     return;
    // };

    // programErrorElement.textContent = "";

    //create program instance and add it to festival instance

    var program = new Program(date);
    festival.programList.push(program);

    //add program to DOM program list

    var index = festival.programList.length - 1;
    var li = document.createElement("li");
    li.setAttribute("id", "program-item-" + index);
    li.textContent = program.getData();
    ulProgramListElement.appendChild(li);

    var option = document.createElement("option");
    option.setAttribute("value", index);
    option.textContent = program.getData();
    selectProgramElement.appendChild(option);
}


function addMovieToProgram() {
    //collect data
    var selectedMovieIndex = selectMovieElement.value;
    var selectedProgramIndex = selectProgramElement.value;

    var movieToAdd = festival.movieList[selectedMovieIndex];
    var programToAddTo = festival.programList[selectedProgramIndex];

    //validate inputs
    if (!selectedMovieIndex || !selectedProgramIndex) {
        addMovieErrorElement.textContent = "Please select an option from the list.";
        return;
    };

    var movieInProgram = programToAddTo.movieList.find(function (movie) {
        return movie.title === movieToAdd.title;
    });

    if (movieInProgram) {
        addMovieErrorElement.textContent = "Movie is already in this program.";
        return;
    };

    addMovieErrorElement.textContent = "";

    programToAddTo.addMovie(movieToAdd);
    var programLi = document.querySelector("#program-item-" + selectedProgramIndex);
    programLi.textContent = programToAddTo.getData();

    selectProgramElement.textContent = "-";

    festival.programList.forEach(function (program, index) {
        var newOption = document.createElement("option");
        newOption.value = index;
        newOption.textContent = program.getData();
        selectProgramElement.appendChild(newOption);
    });

    // clear inputs
    selectMovieElement.value = "";
    selectProgramElement.value = "";
};



createMovieButton.addEventListener("click", addMovie);
createProgramButton.addEventListener("click", addProgram);
addMovieToProgramButton.addEventListener("click", addMovieToProgram);