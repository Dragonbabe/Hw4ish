

const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qimg = document.getElementById("questionImage");

const questionsElements = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const choiceD = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

let lastQuestionIndex = questions.length - 1;
// 10 seconds for every question
const questionTime = 10;

const gaugeWidth = 150;

let count = 0;

const gaugeProgressUnit = gaugeWidth / questionTime;

function counterRender() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px";
        count++;
    } else {
        count = 0;
        answerIsWrong();
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            questionRender();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}
let TIMER =
    setInterval(counterRender, 1000);

clearInterval(TIMER);


let runningQuestionIndex = 0;
function renderQuestion() {
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    function progressRender() {
        for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
            progress.innerHTML += "<div class='prog' id=" + qIndex + "></div";
        }
    }
    function answerIsCorrect() {
        document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
    }
    function answerIsWrong() {
        document.getElementById(runningQuestionIndex).style.backgroundColor = "magenta";
    }
}
    let score = 0;
    function checkAnswer(answer) {
        if(questions[runningQuestionIndex].correct == answer){
            score++;
            answerIsCorrect();
        }else{
            answerIsWrong();
        }
        if(runningQuestionIndex < lastQuestionIndex){
            count = 0;
            runningQuestionIndex++;
            questionRender();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
        }



