// checkboxes for each question
// first part is a button
// each variable -> all questions in a variable
// timer
// store high scores

var secondsLeft = 10;

var questions = [{
        title: "What language family does English belong to?",
        answers: [1, 2, 3, 4],
        correctAnswer: 1
    },
    {
        title: "The words cow and beef are from what languages respectively?",
        answers: [1, 2, 3, 4],
        correctAnswer: 1
    },
    {
        title: "What alphabet does English use?",
        answers: [1, 2, 3, 4],
        correctAnswer: 2
    },
    {
        title: "Generally, why does English have French in it?",
        answers: [1, 2, 3, 4],
        correctAnswer: 2
    }
]

var questionIndex = 0;

function timerThing() {
    $("#timer").text(secondsLeft);
    secondsLeft--;
    if (secondsLeft <= 0) {
        clearInterval(timer);
    }
};

var timer;

var question = $("#question").text("Ready to Start the Quiz?")
var answer = $(".correctAnswer")

function runGame() {

    $("#question").text(questions[questionIndex].title)
    $("#answer-1").text(questions[questionIndex].answers[0])
    $("#answer-2").text(questions[questionIndex].answers[1])
    $("#answer-3").text(questions[questionIndex].answers[2])
    $("#answer-4").text(questions[questionIndex].answers[3])
};

$(".startButton").click(function () {
    $("#main").show();
    $(".startButton").hide();
    timer = setInterval(timerThing, 500);
    runGame();
});
$(".answer").click(function () {
    var guess = $(this).text();
    if (guess === questions[questionIndex].correctAnswer) {
        console.log("good job")
        goodAnswers++;

    } else {
        console.log("bad")
        badAnswers++;
        secondsLeft = secondsLeft - 15;
        // secondsLeft -= 15;
        }

    if (questionIndex === questions.length - 1) {
        console.log("gameover")
    } else {
        questionIndex++;
        runGame();
    }
})

function end() {
    console.log("end func")
}