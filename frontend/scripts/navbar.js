const navbar = () => {
    const navbarContainer = document.getElementById('navbar')
    const renderNavbar = 
    `<nav class="navbar">
            <div id="apd">Astonomy Pic of Day</div>
            <div id="ssl">Space Station Location</div>
            <div id="quiz">Science Quiz</div>
            ${navbarConditional()}
    </nav>`
    return navbarContainer.innerHTML = renderNavbar
}

const navbarConditional = () => {
    if(user != null) {
        return `<div id="btp">Back to Planets</div>`
    } else {
        return ` `
    }
}

const astronomyPicOfDayListener = () => {
    const apdElement = document.getElementById('apd')
    apdElement.addEventListener('click', e => {
        //console.log(e)
        pickDateForm();
    })
}

const backToPlanetsNavbarListener = () => {
    const btpElement = document.getElementById('btp')
    btpElement.addEventListener('click', e => {
        Planet.rerenderPlanets();
    })
}

const spaceStationLocationListener = () => {
    const sslElement = document.getElementById('ssl')
    sslElement.addEventListener('click', e => {
        //console.log(e)
        renderMap();
        spaceStationFetch();
    })
}

const listeners = () => {
    backToPlanetsNavbarListener();
    astronomyPicOfDayListener();
    spaceStationLocationListener();
    quizListener();
}

const quizListener = () => {
    const quizElement = document.getElementById('quiz')
    quizElement.addEventListener('click', e => {
        //console.log(e)
        pickQuizParams();
        //renderQuiz();
        //fetchQuiz();
    })
}