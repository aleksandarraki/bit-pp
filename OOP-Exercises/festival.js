"use strict";


(function () {
    console.log("Hi");

    function Genre(name) {
        if (!name) {
            throw new Error("Genre is required");
        }
        this.name = name;
        this.getData = function () {
            return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        if (!title || !genre || !length) {
            throw new Error("Missing input");
        }
        if (isNaN(length)) {
            throw new Error("Please add valid length")
        }
        if (!(genre instanceof Genre)) {
            throw new Error("invalid genre");
        }
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            return (this.title + ", " + this.length + "min " + this.genre.getData());
        }
    }

    function Program(date) {
        if (!date) {
            throw new Error("Date is requred")
        }
        this.date = new Date(date);
        this.movieList = [];
        this.getNumberOfMovies = function () {
            return this.movieList.length;
        };
        this.addMovie = function (m) {
            if (!(m instanceof Movie)) {
                throw new Error("invalid movie input");
            }
            this.movieList.push(m);
        };
        this.getTotalLength = function () {
            var total = 0;
            this.movieList.forEach(function (movie) {
                total += movie.lengthOfMovie;
            });
            return total;
        };
        this.getData = function () {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var result = day + "." + month + "." + year + ", program duration " + this.getTotalLength() + "min";
            this.movieList.forEach(function (movie) {
                result += '\n\t\t' + movie.getData();
            });
            return result;
        };
    }

    function Festival(name) {
        if (!name) {
            throw new Error("Invalid name input");
        }
        this.name = name;
        this.programList = [];
        this.getTotalNumberOfMovies = function () {
            var total = 0;
            this.programList.forEach(function (program) {
                total += program.getNumberOfMovies();
            });
            return total;
        };
        this.addProgram = function (p) {
            if (!(p instanceof Program)) {
                throw new Error("Invalid program input");
            }
            this.programList.push(p);
        };
        this.getData = function () {
            var result =
                this.name +
                ' festival has ' +
                this.getTotalNumberOfMovies() +
                ' movie titles';
            this.programList.forEach(function (program) {
                result += '\n\t' + program.getData();
            });
            return result;
        };
    }
    function createMovie(t, l, g) {
        var genre = new Genre(g);
        var movie = new Movie(t, genre, l);
        return movie;
    }

    function createProgram(d) {
        return new Program(d);
    }

    try {
        var fest = new Festival('Fest');

        var sundayProgram = createProgram('10/10/2022');
        var mondayProgram = createProgram('10/12/2022');

        var schindlersList = createMovie('Schindlers list', 160, 'drama');
        var savingPrivateRyan = createMovie('Saving Private Ryan', 103, 'action');
        var equilazer = createMovie('Equilazer', 95, 'action');
        var ironMan = createMovie('Iron Man', 91, 'fantazy');

        sundayProgram.addMovie(schindlersList);
        sundayProgram.addMovie(savingPrivateRyan);
        mondayProgram.addMovie(equilazer);
        mondayProgram.addMovie(ironMan);

        fest.addProgram(sundayProgram);
        fest.addProgram(mondayProgram);

        console.log(fest.getData());
    } catch (error) {
        console.log(error.message);
    }



})();