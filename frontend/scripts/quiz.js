const correctAnswer = ['B'];

const pickQuizParams = () => {
    const quizParamsElement = document.querySelector('body')
    const quizParams = `
    <div id="navbar"></div>
    ${navbar()}
    <form>
        <center>
                <h2>Please select a Quiz Category and Difficulty to get the fun started</h2>
            <select id="category">
                <option value="17">Science & Nature</option>
                <option value="18">Computers</option>
                <option value="19">Mathematics</option>
                <option value="22">Geography</option>
                <option value="30">Science Gadgets</option>
            </select>
            <select id="difficulty">
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <button type="submit" id="quiz-button">Submit</button>
        </center>
    </form>`;
    quizParamsElement.innerHTML = quizParams
    getSelection();
}

const getSelection = () => {
    const qButton = document.getElementById('quiz-button')
    qButton.addEventListener('click', e => {
        //e.preventDefault();
        console.log(e)

        const category = document.getElementById('category').value
        const difficulty = document.getElementById('difficulty').value

        const addSelections = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        
        fetchQuiz(addSelections)
    })
}

const renderQuiz = () => {
    const bodyElement = document.querySelector('body')
    const quizElement = 
    `<div id="navbar"></div>
    ${navbar()}
    <div class="intro text-center">
        <div class="container">
            <h2 class="display-3 my-4">Science Quiz</h2>
        </div>
    </div>
    <div class="result py-4 d-none bg-light text-center">
        <div class="container lead">
            <p>You got <span class="text-primary display-4 p-3"> 0%</span>right!</p>
        </div>
    </div>
    <div class="quiz py-4">
        <div class="container">
            <h2 class="my-5">On with the questions...</h2>

            <form class="quiz-form"></form>

        </div>
    </div>
    <div class="text-center">
        <input id="results" type="submit" class="btn btn-light">
    </div>`;

    bodyElement.innerHTML = quizElement
    // fetchQuiz();
    quizFormTemplate(); 
    checkResultsListener();
    listeners();  
}

const fetchQuiz = (addSelections) => {
    fetch(addSelections)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        console.log(data.results[0].question)
        console.log(data.results[0].correct_answer)
        console.log(data.results[0].incorrect_answers)
    })
    renderQuiz();
}

// const game = () => {

// }

const quizFormTemplate = () => {
    const quizElement = document.querySelector('.quiz-form')
    const quizForm = 
    `<div class="my-5">
    <p class="lead">1. What is 275 divided by 25?</p>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="A" checked>
            <label class="form-check-label">13</label>
        </div>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="B">
            <label class="form-check-label">11</label>
        </div>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="C">
            <label class="form-check-label">15</label>
        </div>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name="q1" value="D">
            <label class="form-check-label">10</label>
        </div>`;
        quizElement.innerHTML += quizForm
}

const checkResultsListener = () => {
    const form = document.getElementById('results');
    form.addEventListener('click', e => {
        console.log(e)
        e.preventDefault();
        checkAnswers();
    })
}

const checkAnswers = () => {
    const form = document.querySelector('.quiz-form');
    const result = document.querySelector('.result')
    let score = 0;
    const userAnswers = [
        form.q1.value
        // form.q2.value,
        // form.q3.value,
        // form.q4.value,
        // form.q5.value,
        // form.q6.value,
        // form.q7.value,
        // form.q8.value,
        // form.q9.value,
        // form.q10.value
    ];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 10;
        }
    })
    scrollTo(0, 0);

    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 15);
};



//display questions in template
//randomize correct/incorrect answers for placement in template
//push correct answer value into array to compare to value of checked answer