
/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// Variables
var correct;

const questionEl = document.querySelector("#question");
const answersEl = document.querySelector("#answers");
const nextEl = document.querySelector("#next");
const container = document.querySelector(".container")

var score = 0;
var questionIndex = 0;

/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// All the questions and answers stored in arrays.
const questions = [
    {
        question: "Which year was Cyberpunk 2077 released?",
        answers: [
            {answer: "2077", correct: false},
            {answer: "2020", correct: true},
            {answer: "1977", correct: false},
            {answer: "2021", correct: false}
        ]
    },
    {
        question: "Where does the game take place?",
        answers: [
            {answer: "Day City", correct: false},
            {answer: "Night Plaza", correct: false},
            {answer: "Sun City", correct: false},
            {answer: "Night City", correct: true}
        ]
    },
    {
        question: "What is the name of the character you play as?",
        answers: [
            {answer: "Z", correct: false},
            {answer: "V", correct: true},
            {answer: "X", correct: false},
            {answer: "Y", correct: false}
        ]
    },
    {
        question: "Which type of ranged weapon has homing bullets?",
        answers: [
            {answer: "Power", correct: false},
            {answer: "Tech", correct: false},
            {answer: "Smart", correct: true},
            {answer: "Fire", correct: false}
        ]
    },
    {
        question: "How many regions will you find in Night City?",
        answers: [
            {answer: "4", correct: false},
            {answer: "2", correct: false},
            {answer: "10", correct: false},
            {answer: "6", correct: true}
        ]
    },
    {
        question: "Which region of Night City is inhabited by immigrants?",
        answers: [
            {answer: "Watson", correct: true},
            {answer: "Pacifica", correct: false},
            {answer: "Santo Domingo", correct: false},
            {answer: "Center City", correct: false}
        ]
    },
    {
        question: "What process allows the main character to undergo other people's experiences?",
        answers: [
            {answer: "Raindance", correct: false},
            {answer: "Braindance", correct: true},
            {answer: "Weapondance", correct: false},
            {answer: "Minddance", correct: false}
        ]
    },
    {
        question: "What do you get for completing side quests?",
        answers: [
            {answer: "Dollars", correct: false},
            {answer: "Coins", correct: false},
            {answer: "Street Creed", correct: true},
            {answer: "Weapons", correct: false}
        ]
    },
    {
        question: "Which Night City region is infested with gangs?",
        answers: [
            {answer: "Pacifica", correct: true},
            {answer: "Santo Domingo", correct: false},
            {answer: "Watson", correct: false},
            {answer: "Westbrook", correct: false}
        ]
    },
    {
        question: "What can be used in the game for healing?",
        answers: [
            {answer: "Consumables", correct: true},
            {answer: "Shots", correct: false},
            {answer: "Health Kits", correct: false},
            {answer: "Grenade Launcher", correct: false}
        ]
    }
];
/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

///////////////////////////////////////////////////////////////////////////////////////////
                                    //FUNCTIONS//
///////////////////////////////////////////////////////////////////////////////////////////

// Start Quiz
function beginQuiz() {
    score = 0;
    questionIndex = 0;

    nextEl.innerHTML = "(N)(e)(x)(t)";
    displayQuestion();
}

// resets and display the new questions and answers
function displayQuestion() {

    //Resets the previus question/answer.
    resetQuiz();

    var questionNum = questionIndex + 1;
    var currentQuest = questions[questionIndex];
    questionEl.innerHTML = "(" + questionNum + "). " + currentQuest.question;

    currentQuest.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerHTML = answer.answer;
        btn.classList.add("butt-on");
        answersEl.appendChild(btn);

        if(answer.correct){
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener("click", userChoice)
    });
};

// restart the quiz by removing the previous elements
function resetQuiz() {
    nextEl.getElementsByClassName.display = "none";
    while(answersEl.firstChild){
        answersEl.removeChild(answersEl.firstChild);
    };
};

// determines and stores what the user chose.
function userChoice(event) {
    const targetedButton = event.target;
    const isCorrect = targetedButton.dataset.correct === "true";
    if(isCorrect) {
        score++;
        targetedButton.classList.add("correct");
    }
    else {
        targetedButton.classList.add("incorrect");
    }

    //it disables the buttons and only shows the user answer and the correct answer in case the user
    //responded with the wrong choice
    Array.from(answersEl.children).forEach(btn => {
        if (btn.dataset.correct === "true"){
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    
    nextEl.style.display = "block";
};

// displays the score at the end and enables the player to continue or start again once all the questions
//  are answered.
function displayScore(){
    resetQuiz();
    questionEl.innerHTML = "Final Score: " + score;
    nextEl.innerHTML = "Play Again";
    nextEl.style.display = "block";
};

// next button inplementation
function nextEnd(){
    questionIndex++;
    if(questionIndex < questions.length){
        displayQuestion();
    }
    else{
        displayScore();
    };
};

// when clicking on the next button.
nextEl.addEventListener("click", function(){
    if(questionIndex < questions.length){
        nextEnd();
    }
    else {
        beginQuiz();
        timeClass.style.display = "block";
    }
});


// more variables but for the start of the quiz.
var x = document.querySelector(".fondito");
var z = document.querySelector(".intro");
var a = document.querySelector("#start");


// big main function to hide elements at the start of the quiz and once the users starts to play.
function hide() {
    beginQuiz();
    
    a.addEventListener("click", function() {
        z.style.display = "none";
        a.style.display = "none";
        x.style.display = "none";
        container.style.display = "block";

        // element selectors stored in variables.
        var timerEl = document.querySelector(".timer");
        var timeClass = document.querySelector(".time");
        var submit = document.querySelector(".POST");
        var highClass = document.querySelector(".high");
        var infoo = document.querySelector("#info");

        highClass.addEventListener("click",function() {
            infoo.style.display = "block";
        });

        timeClass.style.display = "block";
        
        // timer inplementation.
        function timerDisp() {
            var sec = 30;
            timer = setInterval(function(){
            timerEl.innerHTML = "Timer: " + sec --;

            if (sec === -1) {
                clearInterval(timer);
                displayScore();
                submit.style.display = "block";
                timerEl.style.display = "none";
            }
            },1000)
        }
            timerDisp();
    })
}

// variables for the name and scores
var in1 = document.querySelector("#dis1");
var in2 = document.querySelector("#dis2");

const submitBtn = document.querySelector("#sub");

// displays whats stored at the local storage to display what the HS is.
function renderLastRegistered() {
    var initials = localStorage.getItem("initials");
    var highScore = localStorage.getItem("score");
    console.log(initials);


    in1.innerHTML = initials;
    in2.innerHTML = highScore;
}

// sets all the results inside of the local storage.
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
  
    var initials = document.querySelector("#ini").value;
      localStorage.setItem("initials", initials);
      localStorage.setItem("score", score);
      renderLastRegistered();
    });




///////////////////////////////////////////////////////////////////////////////////////////
                                    //EXECUTION//
///////////////////////////////////////////////////////////////////////////////////////////

hide();