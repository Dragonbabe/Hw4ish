// Created variables needed for the project
var start = document.getElementById("start");

var timer = document.getElementById("timer");

var highscore = document.getElementById("highscore");

var instruction = document.getElementById("instruction");

var quizpage = document.getElementById("quizpage");

var question = document.getElementById('question');

var choices = document.getElementById('choices');

var reset = document.getElementById("reset");

// this variable returns the number of questions in questions.js.
let lastQuestionIndex = question.length; //5
var currentQuestionIndex = 0;

//15 seconds for every question 
const questionTime = 15;

var count = 0;

function renderQuestion() {
    let q = questions[currentQuestionIndex];
    var title = q.title;
    question.textContent = title;

    var arr = q.choices;
    var rightAnswer = q.answer;
    var playersChoice = '';

    for (var i = 0; i < arr.length; i++) {
        var option = arr[i];

        var button = document.createElement('button');
        var li = document.createElement('li');
        button.textContent = option;
        li.appendChild(button);
        choices.appendChild(li);

        // need to fix something here... Idk what happened! Help!
        button.addEventListener('click', function () {
            playersChoice = button.textContent;
            console.log(playersChoice);
        });
    }



    // question.innerHTML = "<p>" + q.question + "</p>";
    // choiceA.innerHTML = q.choiceA;
    // choiceB.innerHTML = q.choiceB;
    // choiceC.innerHTML = q.choiceC;
    // choiceD.innerHTML = q.choiceD;
    //I apologize there is a ton of extra uneeded code in here, I started the project and then I
    //got confused by a lot of different things and then every time I tried to take out the extra 
    //stuff it created a bug so I was afraid to take it out!
    //So there is a lot of unnecessary things here.
    //Start unnecessary code here....
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



function counterRender() {
    if (count <= questionTime) {
        
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




let score = 0;
function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct == answer) {
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        count = 0;
        runningQuestionIndex++;
        questionRender();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}
//Until about here.....
//Trying to get my buttons to work!
start.addEventListener('click', function () {
    renderQuestion();
    timer();

});

reset.addEventListener('click', function () {
});
//Hiding the stuff I didn't need to see when the quiz started
function hideInstruction() {
    instruction.style.display = 'none';
};

function showInstruction() {
    instruction.style.display = 'block';
};

function showQuizPage() {
    quizpage.style.display = 'block';
}
function hideQuizPage() {
    quizpage.style.display = 'none';
}
//Trying to figure out how to start the timer.... I couldn't get it!
var counter = 0;

var timeLeft = 75;

function setup() {

    var timer = select('#timer');

    timer.html(timeLeft - counter);

    function timeIt() {
        counter++;
        timer.html(timeLeft - counter);
    }

    setInterval(timeIt, 1000);
}
 




