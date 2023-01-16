// Old way




function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}


// 4. Both web and mobile applications should inherit methods:
// ○ isCCLicence which checks if the licence of the application is CC (Creative
// Commons)
// ○ like which increases the number of stars by one
// ○ showStars which prints out the number of stars

App.prototype.isCCLicence = function () {
    if (this.licence === "CC" || this.licence === "Creative Commons") {
        return "true";
    } else {
        return "false";
    }
}


App.prototype.like = function () {
    this.stars += 1;
}

App.prototype.showStars = function () {
    console.log(this.stars);
}


// Applications:
// 1. Create constructor functions with properties representing the following:
// ○ WebApp: name, url, technologies, licence, stars
// ○ MobileApp: name, platforms, licence, stars

//webApp constructor

function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;


}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;


// 2. All web applications should inherit methods:
// ○ getData which prints out all the information
// ○ reactBased which checks if one of the used technologies is React

WebApp.prototype.getData = function () {
    console.log(this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars);
}

WebApp.prototype.reactBased = function () {
    for (var i = 0; i < this.technologies.length; i++) {
        if (this.technologies[i] === "React" || this.technologies[i] === "react") {
            return "true";
        } else {
            return "false";
        }
    }
}


// Mobilie app

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;


}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

// 3. All mobile applications should inherit methods:
// ○ getData which prints out all the informations
// ○ forAndroid which checks if one of the platforms the application is developed for is
// Android

MobileApp.prototype.getData = function () {
    console.log(this.name + " " + this.platforms + " " + this.licence + " " + this.stars);
}

MobileApp.prototype.forAndroid = function () {
    for (var i = 0; i < this.platforms.length; i++) {
        if (this.platforms[i] === "Android" || this.platforms[i] === "android") {
            return "true";
        } else {
            return "false";
        }
    }
}



//                        New way


class App {
    constructor(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }

    isCCLicence = function () {
        if (this.licence === "CC" || this.licence === "Creative Commons") {
            return true;
        } else {
            return false;
        }
    }

    like = function () {
        return (this.stars += 1);
    }

    showStars = function () {
        console.log(this.stars);
    }
}

var app = new App("someapp", "Creative Commons", 4);
// console.log(app);
// console.log(app.isCCLicence());
// console.log(app.like());
// console.log(app.showStars());



class WebApp extends App {
    constructor(name, licence, stars, url, technologies) {
        super(name, licence, stars);
        this.url = url;
        this.technologies = technologies;
    }

    getData = function () {
        console.log(this.name + ", " + this.licence + ", " + this.stars + ", " + this.url + ", " + this.technologies);
    }

    reactBased = function () {
        if (this.technologies.includes("React")) {
            return true;
        } else {
            return false;
        }
    }
}

var webApp = new WebApp("someapp", "CC", 3, "http://something.com", ["React", "Angular"]);
// console.log(webApp);
// console.log(webApp.getData());
// console.log(webApp.reactBased());
// webApp.showStars();


class MobileApp extends App {
    constructor(name, licence, stars, platforms) {
        super(name, licence, stars);
        this.platforms = platforms;
    }


    getData = function () {
        return (this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars);
    }

    forAndroid = function () {
        if (this.platforms.includes("Android")) {
            return true;
        } else {
            return false;
        }
    }
}

var mobileApp = new MobileApp("someapp", "CC", 3, ["Android", "someplatform"]);
console.log(mobileApp);
mobileApp.getData();
console.log(mobileApp.forAndroid());
console.log(mobileApp.isCCLicence());
// console.log(mobileApp.like());
mobileApp.showStars()

