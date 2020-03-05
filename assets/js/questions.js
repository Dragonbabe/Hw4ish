var questions = [{
    question: "What color are Friesians?",
    answer: "Black",
    choices: ["Bay", "Chestnut", "Pinto", "Black"]
},
    {
    question: "What color are beagles?",
    answer: "All of the above",
    choices: ["White", "Black", "Brown", "All of the above"]
},

    {
    question: "What color are Holstein cows?",
    answer: "Black and white",
    choices: ["Black", "White", "Brown", "Black and white"]
}]
var score = 0;
    for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert ("Wrong!");
  }
}
alert ("You  got " + score + "/" + questions.length);
 