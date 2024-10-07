var questions = [
    {
        question: "What is the baby name of a cat?",
        choices: ["Kitten", "Puppy", "Calf", "Cub"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a dog?",
        choices: ["Kitten", "Puppy", "Calf", "Cub"],
        correctAnswer: 1
    },
    {
        question: "What is the baby name of a cow?",
        choices: ["Kitten", "Puppy", "Calf", "Cub"],
        correctAnswer: 2
    },
    {
        question: "What is the baby name of a bear?",
        choices: ["Kitten", "Puppy", "Calf", "Cub"],
        correctAnswer: 3
    },
    {
        question: "What is the baby name of a horse?",
        choices: ["Colt", "Cub", "Calf", "Kitten"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a goat?",
        choices: ["Kid", "Puppy", "Calf", "Cub"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a sheep?",
        choices: ["Lamb", "Cub", "Calf", "Kitten"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a lion?",
        choices: ["Cub", "Kitten", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a kangaroo?",
        choices: ["Joey", "Puppy", "Calf", "Cub"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a rabbit?",
        choices: ["Bunny", "Cub", "Calf", "Kitten"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a pig?",
        choices: ["Piglet", "Puppy", "Calf", "Cub"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a dolphin?",
        choices: ["Calf", "Kitten", "Cub", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a snake?",
        choices: ["Hatchling", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a fish?",
        choices: ["Fry", "Cub", "Calf", "Kitten"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a goat?",
        choices: ["Kid", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of an elephant?",
        choices: ["Calf", "Kitten", "Cub", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a fox?",
        choices: ["Kit", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a duck?",
        choices: ["Duckling", "Cub", "Calf", "Kitten"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a goose?",
        choices: ["Gosling", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a chicken?",
        choices: ["Chick", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a swan?",
        choices: ["Cygnets", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a turkey?",
        choices: ["Poults", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a llama?",
        choices: ["Cria", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a sheep?",
        choices: ["Lamb", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a ferret?",
        choices: ["Kit", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a raccoon?",
        choices: ["Cub", "Kitten", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a walrus?",
        choices: ["Calf", "Kitten", "Cub", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a mouse?",
        choices: ["Pinky", "Kitten", "Cub", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a moose?",
        choices: ["Calf", "Kitten", "Cub", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a whale?",
        choices: ["Calf", "Kitten", "Cub", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a squirrel?",
        choices: ["Kit", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a seagull?",
        choices: ["Chick", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    },
    {
        question: "What is the baby name of a vulture?",
        choices: ["Chick", "Cub", "Calf", "Puppy"],
        correctAnswer: 0
    }
];


var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function() {
    displayCurrentQuestion();
    $(document).find(".quizMessage").hide();

    $(document).find(".nextButton").on("click", function() {
        if (!quizOver) {
            var value = $("input[type='radio']:checked").val();
            if (value === undefined) {
                $(document).find(".quizMessage").text("Please select an answer").show();
            } else {
                $(document).find(".quizMessage").hide();

                // Check if the answer is correct
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play again?");
                    quizOver = true;
                }
            }
        } else {
            // Reset quiz state
            quizOver = false;
            currentQuestion = 0; // Reset question index
            correctAnswers = 0; // Reset correct answers
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    console.log("In display current question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove(); 

    for (var i = 0; i < numChoices; i++) {
        var choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value="' + i + '" name="dynradio">' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length).show();
}

function hideScore() {
    $(document).find(".result").hide();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length).show();
}