addEventListener("DOMContentLoaded", (event) => {})

var startQuizEl = document.getElementById("startQuiz")
var welcomeEl = document.getElementById("welcome")
var quizEl = document.getElementById("quiz")
var resultEl = document.getElementById("result")
var optionsEl = document.getElementById("options")
var messageEl = document.getElementById("message")
var timerEl = document.getElementById("timer")
var summaryEl = document.getElementById("summary")

var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var countdownTimer;





function stopGame() {
    clearInterval(countdownTimer);
    timerEl.textContent = "";
    quizEl.style.display = 'none';
    resultEl.style.display = 'flex';

    summaryEl.textContent = "You scored " + score + " points!";
}



function displayQuestion() {  


    currentQuestion++;

    console.log('the current question is' + currentQuestion);

    if(currentQuestion >= questions.length) {
        stopGame();
        return;
    }

  }

  var question = questions[currentQuestion];
  document.getElementById("question").textContent = question.title;


function onStartGame() {
    secondsLeft=75;
    score = 0;
    countdownTimer = setInterval(function () {

        if (secondsLeft > 0) {
            timerEl.textContent = secondsLeft + " seconds remaining";
        } else {
                stopGame();

        }
    });
}

startQuiz.addEventListener("click", onStartGame);

addEventListener("click", displayQuestion);

welcomeEl.style.display = 'none';
quizEl.style.display = 'flex';
currentQuestion = 0;

secondsLeft = 75;

displayQuestion();