// checkboxes for each question
// first part is a button
// each variable -> all questions in a variable
// timer
// store high scores

var secondsLeft = 10;

var questions = [
    {
        title: "how many apples do i have?",
        answers: [1,2,3,4],
        correctAnswer: 2
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

var question = $("#question").text("watermelon")
console.log(question)

$(".startButton").click(function(){
    $("#main").show();
    $(".startButton").hide();

    
    $("#question").text(questions[questionIndex].title)
})

$(".answer").click(function(){
    $(this)
});