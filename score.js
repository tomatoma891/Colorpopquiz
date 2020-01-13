const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("Score");
myStorage = window.localStorage;
const highScores = JSON.parse(localStorage.getItem("Score")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    Score.push(score);
    Score.sort((a, b) => b.score - a.score);
    Score.splice(5);

    localStorage.setItem("Score", JSON.stringify(Score));
    window.location.assign("/");
};