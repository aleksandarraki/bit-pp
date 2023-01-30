"use strict";

var uiMoviedata = (function () {
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

    return {
        collectMovieData: collectMovieData,
        setMovieError: setMovieError,
        updateMovieList: updateMovieList,
        clearInputs: clearInputs,
        collectProgramData: collectProgramData,
        setProgramError: setProgramError,
        updateProgramList: updateProgramList,
        collectAddMovieFormData: collectAddMovieFormData,
        setMovieToProgramError: setMovieToProgramError,
        updateProgramData: updateProgramData,
    };
})