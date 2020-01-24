function makeColourValue() {
    return Math.round(Math.random() * 255);
}
function setButtonColour(button, red, green, blue) {
    button.setAttribute('style',
        'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
}
function setBackgroundColour(selectedColor) {
    console.log("setting bkgrnd");
    document.body.style.backgroundColor = selectedColor;
}

var buttons = document.getElementsByClassName('colourButton');
var heading = document.getElementById('colourValue');
var answerMessage = document.getElementById('answer');
var score = 0;
var counter = 0;
function startGame() {
    console.log("starting");
    document.getElementById("hide").style.display = "block";
    answerMessage.innerHTML = "";
    var answerButton = Math.round(Math.random() * (buttons.length - 1));
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        var red = makeColourValue();
        var green = makeColourValue();
        var blue = makeColourValue();
        setButtonColour(buttons[i], red, green, blue);
        if (i === answerButton) {
            heading.innerHTML = `(${red}, ${green}, ${blue})`;;
        }
        buttons[i].addEventListener
            ('click', function () {
                //before we test get the colourVal to equal to buttons[answerButton] style="rbg"
                document.getElementById('colourValue').innerHTML = buttons[answerButton].style.backgroundColor;

                console.log(buttons[answerButton])
                console.log("current style bg color: " + this.style.backgroundColor);

                //if correct
                if (this === buttons[answerButton]) {
                    //display correct
                    answerMessage.innerHTML = "Correct!";
                    //create var to update color
                    var selectedColor = this.style.backgroundColor;
                    //update background color
                    setBackgroundColour(selectedColor);
                    //update score
                    score = score + 1;
                    //displpay score via html
                    document.getElementById('score').innerHTML = "Score: " + score;


                    //display color value via html
                    //document.getElementById('colourValue').innerHTML = selectedColor;

                    counter++;
                    if (counter > 5) {
                        alert("Game over");

                    }
                    console.log("cnt", counter)
                    for (var j = 0; j < buttons.length; j++) {
                        buttons[j].disabled = true;
                    }
                    console.log("user guess")
                } else {
                    answerMessage.innerHTML = "Wrong answer! Guess again!";
                    counter++
                    console.log("cnt", counter)
                    for (var j = 0; j < buttons.length; j++) {
                        buttons[j].disabled = true;
                    }
                    if (counter > 4) {
                        alert("Game over");
                        localStorage.setItem("mostRecentScore", score);
                        return window.location.assign("score.html");





                    }
                }
            });
    };
}
function resetGame() {
    document.body.style.backgroundColor = "white";
    answerMessage.innerHTML = "";
    var answerButton = Math.round(Math.random() * (buttons.length - 1));
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        var red = makeColourValue();
        var green = makeColourValue();
        var blue = makeColourValue();
        setButtonColour(buttons[i], red, green, blue);
        console.log("answer")
        if (i === answerButton) {
            heading.innerHTML = `(${red}, ${green}, ${blue})`;;
        }
    }
}


document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('resetButton').addEventListener('click', resetGame);
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('score').innerHTML = "Score: " + score;
})
var timeleft = 75;
var downloadTimer = setInterval(function () {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished"
    }
}, 1000);


