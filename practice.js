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
    console.log(q);
    var title = q.title;
    console.log(title);
    question.textContent = title;

    var arr = q.choices;
    console.log(arr);
    var rightAnswer = q.answer;
    var playersChoice = '';

    for (var i = 0; i < arr.length; i++) {
        var option = arr[i];
        console.log(option);

        var button = document.createElement('button');
        var li = document.createElement('li');
        button.textContent = option;
        li.appendChild(button);
        choices.appendChild(li);

        // need to fix something here....
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
        // counter.innerHTML = count;
        // timeGauge.style.width = gaugeProgressUnit * count + "px";
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

counterRender();
let TIMER =
    setInterval(counterRender, 1000);

clearInterval(TIMER);


let runningQuestionIndex = 0;



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


start.addEventListener('click', function () {
    console.log('hello');
    renderQuestion();

});

reset.addEventListener('click', function () {
    console.log("reset button pressed")
});



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