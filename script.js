function makeColourValue() {
    return Math.round(Math.random() * 255);
}

function setButtonColour(button, red, green, blue) {
    button.setAttribute('style',
        'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
}

var buttons = document.getElementsByClassName('colourButton');
var heading = document.getElementById('colourValue');
var answerMessage = document.getElementById('answer');

var score = 0;
var counter = 0;

function startGame() {
    answerMessage.innerHTML = "";
    var answerButton = Math.round(Math.random() * (buttons.length - 1));

    for (var j = 0; j <= 5; j++) {
        console.log("game looping");
        for (var i = 0; i < buttons.length; i++) {

            var red = makeColourValue();
            var green = makeColourValue();
            var blue = makeColourValue();

            setButtonColour(buttons[i], red, green, blue);

            if (i === answerButton) {
                heading.innerHTML = `(${red}, ${green}, ${blue})`;;
            }

            buttons[i].addEventListener('click', function () {
                buttons[i].removeEventListener('click', function () {

                    if (this === buttons[answerButton]) {
                        answerMessage.innerHTML = "Correct!";
                        score = score + 1;
                        console.log("score ", score)
                        document.getElementById('score').innerHTML = "Score: " + score;
                        counter++;


                    } else {
                        answerMessage.innerHTML = "Wrong answer! Guess again!";
                        counter++
                    }
                });
            });



        };

    }

    //ends

    if (j === 5) {
        console.log("game over");

    }
}



startGame();

document.getElementById('resetButton').addEventListener('click', startGame);
document.addEventListener("DOMContentLoaded", function () {
    console.log("adding score to page");
    document.getElementById('score').innerHTML = "Score: " + score;
})
var timeleft = 10;
var downloadTimer = setInterval(function () {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished"
    }
}, 1000);

