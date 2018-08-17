var colourDisplay = document.querySelectorAll("#square");
var messageDisplay = document.querySelector("p span");
var correctColourDisplay = document.querySelector("h1 span");
var resultButton = document.querySelector("#result");
var header = document.getElementsByTagName("h1")[0];
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

var numberOfSquares, correctColour;
var colours = [];

numberOfSquares = 6; //Initializing the number of square boxes to 6

init();
setUpEventListener();

//Function calling thr Event Listeners
function setUpEventListener() {

    //Setting Event Listeners to the square boxes
    for (i = 0; i < numberOfSquares; i++) {
        colourDisplay[i].addEventListener("click", function () {
            if (this.style.backgroundColor === correctColour) {
                colourAll();
                messageDisplay.textContent = "Correct!";
                header.style.backgroundColor = correctColour;
                resultButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }

        });
    }

    //Setting Event Listeners to the reset button
    resultButton.addEventListener("click", function () {
        init();
    });

    //Setting Event Listener to the easy button 
    easyButton.addEventListener("click", function () {
        numberOfSquares = 3;
        easyHardButtonClick();
        for (var i = 0; i < 6; i++) {
            if (colours[i]) {
                colourDisplay[i].style.backgroundColor = colours[i];
            } else {
                colourDisplay[i].style.display = "none";
            }
        };
    });

    //Setting Event Listener to the hard button
    hardButton.addEventListener("click", function () {
        numberOfSquares = 6;
        easyHardButtonClick();
        for (var i = 0; i < 6; i++) {
            colourDisplay[i].style.backgroundColor = colours[i];
            colourDisplay[i].style.display = "block";
        }
    });
}


//Colouring all the square boxes with the correct colour
function colourAll() {
    for (var i = 0; i < colourDisplay.length; i++) {
        colourDisplay[i].style.backgroundColor = correctColour;
    }
}

//For selecting the random colour from the displayed colour in the square boxes in the UI
function randomColourSelector() {
    var num = Math.floor(Math.random() * numberOfSquares);
    return colours[num];

}

//Generation combination of random colours for the square boxes in the display
function randomColours() {
    colours = [];
    for (var i = 0; i < numberOfSquares; i++) {
        colours[i] = randomColourMaker();
    }
}

//Generating random colour
function randomColourMaker() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}

//Initializing function
function init() {
    randomColours();
    correctColour = randomColourSelector();
    correctColourDisplay.textContent = correctColour;
    for (var i = 0; i < colourDisplay.length; i++) {
        colourDisplay[i].style.backgroundColor = colours[i];
    }
    header.style.backgroundColor = "steelblue";
    resultButton.textContent = "NEW COLOURS";
    messageDisplay.textContent = "";
}

//Initiaizing function when easy or hard button is clicked
function easyHardButtonClick() {
    easyButton.classList.toggle('selected');
    hardButton.classList.toggle('selected');
    header.style.backgroundColor = "steelblue";
    resultButton.textContent = "NEW COLOURS";
    messageDisplay.textContent = "";
    randomColours();
    correctColour = randomColourSelector();
    correctColourDisplay.textContent = correctColour;
}
