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

            <form class="quiz-form">
            </form>
        </div>
    </div>`;
    bodyElement.innerHTML = quizElement
    fetchQuiz();
    quizFormTemplate();
}

const fetchQuiz = () => {
    fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        //console.log(data)
        console.log(data.results[0].question)
        console.log(data.results[0].correct_answer)
        console.log(data.results[0].incorrect_answers)
    })
}

const game = () => {

}

const quizFormTemplate = () => {
    const quizElement = document.querySelector('.quiz-form')
    const quizForm = 
    `<div class="my-5">
    <p class="lead">1. What is 275 divided by 25?</p>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name="q2" value="A" checked>
            <label class="form-check-label">13</label>
        </div>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name="q2" value="B">
            <label class="form-check-label">11</label>
        </div>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name="q2" value="C">
            <label class="form-check-label">15</label>
        </div>
        <div class="form-check my-2 text-white-50">
            <input type="radio" name="q2" value="D">
            <label class="form-check-label">10</label>
        </div>`;
        quizElement.innerHTML += quizForm
}

//display questions in template
//randomize correct/incorrect answers for placement in template
//push correct answer value into array to compare to value of checked answer
//compute score
//display results
//scroll to top auto for results
//set timeout on results for countup effect