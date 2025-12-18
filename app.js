
const quizData = {
    Python: [
        {
            question: "What is the correct way to create a list in Python?",
            options: ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}"],
            correct: 1
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "func"],
            correct: 1
        },
        {
            question: "What does the len() function do?",
            options: ["Returns the length of an object", "Deletes an object", "Creates a new list"],
            correct: 0
        },
        {
            question: "How do you start a comment in Python?",
            options: ["//", "#", "/*"],
            correct: 1
        },
        {
            question: "What is the output of: print(2 ** 3)?",
            options: ["6", "8", "9"],
            correct: 1
        }
    ],
    JavaScript: [
        {
            question: "Which keyword is used to declare a constant in JavaScript?",
            options: ["var", "let", "const"],
            correct: 2
        },
        {
            question: "What does DOM stand for?",
            options: ["Document Object Model", "Data Object Model", "Display Object Management"],
            correct: 0
        },
        {
            question: "How do you write a single-line comment in JavaScript?",
            options: ["#", "//", "/*"],
            correct: 1
        },
        {
            question: "Which method adds an element to the end of an array?",
            options: ["push()", "add()", "append()"],
            correct: 0
        },
        {
            question: "What is the correct way to write an if statement?",
            options: ["if x = 5", "if (x == 5)", "if x == 5 then"],
            correct: 1
        }
    ]
};




let currentCategory = '';
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;



function startQuiz(category) {
    currentCategory = category;
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    
    // Hide category selection
    document.querySelector('.category-container').style.display = 'none';
    document.querySelector('h1').textContent = category + ' Quiz';
    
    // Show quiz section
    document.querySelector('.Quiz').style.display = 'block';
    
    //  total questions
    document.getElementById('totalQuestions').textContent = quizData[category].length;
    
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentCategory][currentQuestion];
    
    // question number
    document.getElementById('questionNumber').textContent = currentQuestion + 1;
    
    // Display question
    document.getElementById('question').textContent = question.question;
    
    // Display options
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('nextBtn').disabled = true;
    selectedAnswer = null;
}

function selectAnswer(index) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = index;
    const question = quizData[currentCategory][currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === question.correct) {
            btn.classList.add('correct');
        } else if (i === index) {
            btn.classList.add('incorrect');
        }
    });
    
    if (index === question.correct) {
        score++;
    }
    
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData[currentCategory].length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // Hide quiz section
    document.querySelector('.Quiz').style.display = 'none';
    
    // Show results section
    document.querySelector('.results-section').style.display = 'block';
    document.querySelector('.restart-btn').style.display = 'inline-block';

    const totalQuestions = quizData[currentCategory].length;
    const resultMessage = document.getElementById('resultMessage');
    const finalScore = document.getElementById('finalScore');
    
    finalScore.textContent = `${score} / ${totalQuestions}`;
    
    // Determine pass/fail/win
    if (score === totalQuestions) {
        document.querySelector('h1').textContent = 'You Win! 🏆';
        resultMessage.textContent = 'Perfect score! You answered all questions correctly!';
    } else if (score >= 3) {
        document.querySelector('h1').textContent = 'You Pass! ✅';
        resultMessage.textContent = 'Great job! You passed the quiz!';
    } else {
        document.querySelector('h1').textContent = 'You Lose ❌';
        resultMessage.textContent = 'Keep practicing! Try again to improve your score.';
    }
}

function restart() {
    // Hide results section
    document.querySelector('.results-section').style.display = 'none';
    
    // Show category selection
    document.querySelector('.category-container').style.display = 'flex';
    document.querySelector('h1').textContent = 'Choose a Category';
    
    // Reset quiz section
    document.querySelector('.Quiz').style.display = 'none';
}


