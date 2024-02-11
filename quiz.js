//quiz functions, returns, elements and counter
var startQuiz = document.getElementById("startQuiz")

var welcome = document.getElementById("welcome")
var quiz = document.getElementById("quiz")
var result = document.getElementById("result")

var options = document.getElementById("options")
var message = document.getElementById("message")

var timer = document.getElementById("timer")

var summary = document.getElementById("summary")



var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var countdownTimer;

function stopGame() {

    clearInterval(countdownTimer);

    timer.textContent = ""

    quiz.style.display = 'none';
    result.style.display = 'flex';


}