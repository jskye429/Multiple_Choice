// checkboxes for each question
// first part is a button
// each variable -> all questions in a variable
// timer
// store high scores

var secondsLeft = 100;
var goodAnswers = 0;
var badAnswers = 0;


var questions = [{
        title: "What language family does English belong to?",
        answers: ["Romantic","Germanic", "Semitic", "Dravidian"],
        correctAnswer: "Germanic"
    },
    {
        title: "The words cow and beef are from what languages respectively?",
        answers: ["French/German", "French/Itallic", "Italian/Etruscan", "German/French"],
        correctAnswer: "German/French"
    },
    {
        title: "What alphabet does English use?",
        answers: ["Romantic", "Germanic", "Devanagari", "Etruscan"],
        correctAnswer: "Romantic"
    },
    {
        title: "Generally, why does English have French in it?",
        answers: ["because of the pangea", "The Norman invasion","Because the French are french", "because the English are obsessed with the French"],
        correctAnswer: "The Norman invasion"
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
        scores+25

    } else {
        console.log("bad")
        badAnswers++;
        secondsLeft = secondsLeft - 15;
        
        }
    console.log(scores)

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



// add local storage bit and content and then we are done baby! 
// Store
// localStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");