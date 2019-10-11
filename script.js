// checkboxes for each question
// first part is a button
// each variable -> all questions in a variable
// timer
// store high scores

var secondsLeft = 10;

var questions = [
    {
        title: "What language family does English belong to?",
        answers: [1,2,3,4],
        correctAnswer: 1
    }
    
]
var questionIndex = 0;

function timerThing(){
    console.log(secondsLeft)
    secondsLeft--;
    if(secondsLeft === 0){
        clearInterval(timer);
    }
}

var timer = setInterval(timerThing, 500);

var question = $("#question").text("Ready to Start the Quiz?")
console.log(question)

$(".startButton").click(function(){
    $("#main").show();
    $(".startButton").hide();

    
    $("#question").text(questions[questionIndex].title)
})

$(".answer").click(function(){
    $(this)
})