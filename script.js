var questions = [{
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
 




