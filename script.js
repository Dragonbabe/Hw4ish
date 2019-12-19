

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


let questions = [{
    question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
    choiceA: "Declaration",
    choiceB: "Variable",
    choiceC: "Function",
    choiceD: "String",
    correct: "C"
},
{
    question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
    choiceA: "For Loop",
    choiceB: "conditional loop",
    choiceC: "while loop",
    choicedD: "Else loop",
    correct: "C",
},
{
    question: "What is the element called that forms a search pattern out of a sequence of characters?",
    choiceA: "RegExp or Regular Expression",
    choiceB: "Event",
    choiceC: "Boolean Variable",
    choicedD: "Conditional Argument",
    correct: "C",
},
{
    question: "What can loops offer JavaScript code as a whole?",
    choiceA: "Added plug-ins",
    choiceB: "Cross-platform support",
    choiceC: "Improved performance",
    choicedD: "Cleaner syntax",
    correct: "C",
},
{
    question: "What is the name of the statement that is used to exit or end a loop?",
    choiceA: "Break statement",
    choiceB: "Close statement",
    choiceC: "Conditional statement",
    choicedD: "Falter statement",
    correct: "A",
},
{
    question: "What elements are used to test for TRUE or False values stored in variables?",
    choiceA: "Trigger readers",
    choiceB: "RegExp or Regular Expressions",
    choiceC: "Conditional statements",
    choicedD: "Comparison and logical operators",
    correct: "C",
},
{
    question: "What is the format called that is used for storing and transporting data?",
    choiceA: "JSON",
    choiceB: "HTML",
    choiceC: "Font",
    choicedD: "Syntax",
    correct: "A",

},














]
 [{
    prompt: "What color are Friesians?\n(a) Bay/Chestnut (b) Pinto\n\(c) Black",
    answer: "c"
},

{
    prompt: "What color are beagles?\n(a) White\n\
    (b) Black\n(c) Brown\n(d) All of the above",
    answer: "d"
},

{
    prompt: "What color are cows?\n(a) Black\n(b) White\n(c) Black and white",
    answer: "c"
}]
var score = 0;
for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}
alert("You  got " + score + "/" + questions.length);

