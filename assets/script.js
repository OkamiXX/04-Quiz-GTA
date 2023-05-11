var correct;

const questionEl = document.querySelector("#question");
const answersEl = document.querySelector("#answers");
const nextEl = document.querySelector("#next");

var score = 0;
var questionIndex = 0;


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
    },
    

]