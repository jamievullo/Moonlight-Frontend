let selectedMoon;
let chosenMoons = [];
let newMoon;
let selectedMoons = [];

class Moon {
    constructor(id, name, size, orbital_period, gravity, description, link, picture, planet_id) {
    this.id = id
    this.name = name
    this.size = size    
    this.orbital_period = orbital_period    
    this.gravity = gravity
    this.description = description
    this.link = link
    this.picture = picture
    this.planet_id = planet_id
    }

    renderPlanetMoons(moon) {   
        const moonDisplay = document.querySelector('.moon-row') ;
        const displayMoons = //display moon pics
        `
        <img class="super-moon" src="${this.picture}" id="${this.id}" alt="${this.name}">
        `;
        
        moonDisplay.innerHTML += displayMoons;         
    }

    static renderMoon(moon) {
        //debugger
        const clearMoonPics = document.querySelector('.moon-row');
        const clearMoonInstructionsDisplay = document.getElementById('moon-instructions')
        clearMoonInstructionsDisplay.remove();
        clearMoonPics.remove();
        const selectMoonElement = document.getElementById('moon');
        const displayMoon = `
        <div class="second-render"></div>
            <div class="wrapper">
                <ul class="stage">
                    <li class="scene">
                        <div class="movie">
                            <img class="planet-animation" src="${selectedMoon}" height="400px" width="640px">
                            <div class="info">
                                <header>
                                    <h1>${moon.name}</h1>
                                    <div class="size">Size: ${moon.size}</div>
                                        <div class="orbital-period">Orbital Period: ${moon.orbital_period}</div>
                                        <div class="gravity">Gravity: ${moon.gravity}</div>
                                        <a href="${moon.link}"/target="_blank">${moon.link}</a>
                                </header>
                                <p>
                                    <div class="description" style="color: white">${moon.description}</div>
                                </p>
                                <button type="submit" id="back-button">Go back to Planets</button> 
                            </div>
                        </div>
                    </li>
                </ul>
            </div>`;
        selectMoonElement.innerHTML = displayMoon;
        listenForGoBackToPlanets();
        //<button onclick="window.location.reload()">Reload</button>    
    }

}

function listenForGoBackToPlanets() {
    const goBack = document.getElementById('back-button');
    goBack.addEventListener('click', e => {
        // console.log(chosenPlanet.id);
        console.log(e);
        rerenderPlanets()
    });
}

function listenForMoonSubmit() {
    const retrieveMoons = document.getElementById('moon-button');
    retrieveMoons.addEventListener('click', e => {
        // console.log(chosenPlanet.id);
        // console.log(e.target.id);
        fetchChosenPlanetMoonData();
    });
}

function fetchChosenPlanetMoonData() {
    //keeping routes restful using the planet id for moon rendering
    fetch(`${targetUrl}/planets/${chosenPlanet.id}/moons`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //console.log(data)
        createMoon(data);       
    })
    .catch(err => alert(err.message))
}

function createMoon(data) {
    //clears variable for back button and prevents duplicate rendering
    chosenMoons = []
    data.map(moon => {
        // console.log(moon)
        newMoon = new Moon(moon.id, moon.name, moon.size, moon.orbital_period, moon.gravity, moon.description, moon.link, moon.picture, moon.planet_id)
        chosenMoons.push(newMoon);
    })
    selectPlanetMoons(chosenMoons);
}

function selectPlanetMoons(chosenMoons) {
    //clears varible for back button and prevents duplicate rendering
    selectedMoons = []
    chosenMoons.map(moons => {
        if(moons.planet_id === chosenPlanet.id) {
            //console.log(moons);
            selectedMoons.push(moons);
            }
        })
        const clearChosenPlanetPic = document.getElementById('planet');
        const clearPlanetAttributesDiv = document.getElementById('planet-attributes');
        clearChosenPlanetPic.remove();
        clearPlanetAttributesDiv.remove();
        
        selectedMoons.forEach(moon => {
            //console.log(moon.id);
            //selectedMoonData = moon.id
            renderPlanetMoonsInstructions();
            moon.renderPlanetMoons(moon);
        })
        selectMoon();
    }

function renderPlanetMoonsInstructions() {
    const moonInstructions = document.getElementById('moon-instructions')
    const moonInstructionsDisplay = // display instructions for selecting a moon
    `<h2><center>${user.name}, select a moon for more information by clicking on its image</center></h2>`;

    moonInstructions.innerHTML = moonInstructionsDisplay;
}

function selectMoon() {
    const selectFromMoons = document.querySelectorAll('.super-moon')
    selectFromMoons.forEach(moon => {
    moon.addEventListener('click', e => {
        //console.log(e)
        // console.log(e.target.attributes[1].value)
        // console.log(e.target.attributes[0].value)
        fetchSelectedMoonData(e.target.attributes[2].value)
        selectedMoon = e.target.attributes[1].value
        //renderMoon(e.target.outerHTML)
        })
    })
}

function fetchSelectedMoonData(id) {
    fetch(`${targetUrl}/moons/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //console.log(data)
        Moon.renderMoon(data)
    })
    .catch(err => alert(err.message))
}

function rerenderPlanets() {
    //recreates planet accordian and appends to body of HTML after clearing of all elements in functions
    const snippet = `
    <div id="user-form"></div>
    <div id="welcome-user"><div class="welcome"><h2 style="color: white"><center>Welcome ${user.name}, please select a Planet 
    by clicking on a tile.</center></h2></div></div>
    <div id="planet-pics">
        <div class="accordian">
            <ul>
                <li>
                    <div class="image_title">
                        <a href="#">Mercury</a>
                    </div>
                    <a href="#">
                        <img class="planet-picture" id="1" src="images/Planets/Mercury-Colored1.jpg" alt="Mercury">
                    </a>
                </li>
                <li>
                    <div class="image_title">
                        <a href="#">Venus</a>
                    </div>
                    <a href="#">
                        <img class="planet-picture" id="2" src="images/Planets/Venus-Main.jpg" alt="Venus">
                    </a>
                </li>
                <li>
                    <div class="image_title">
                        <a href="#">Earth</a>
                    </div>
                    <a href="#">
                        <img class="planet-picture" id="3" src="images/Planets/Earth-Main2.jpg" alt="Earth">
                    </a>
                </li>
                <li>
                    <div class="image_title">
                        <a href="#">Mars</a>
                    </div>
                    <a href="#">
                        <img class="planet-picture" id="4" src="images/Planets/Mars-Main6.jpg" alt="Mars">
                    </a>
                </li>
                <li>
                    <div class="image_title">
                        <a href="#">Jupiter</a>
                    </div>
                    <a href="#">
                        <img class="planet-picture" id="5" src="images/Planets/Jupiter-Main5.jpg" alt="Jupiter">
                    </a>
                </li>
                <li>
                    <div class="image_title">
                        <a href="#">Saturn</a>
                    </div>
                    <a href="#">
                        <img class="planet-picture" id="6" src="images/Planets/Saturn-Main-Main2.jpeg" alt="Saturn"> 
                    </a>
                </li>
                <li>
                    <div class="image_title">
                        <a href="#">Uranus</a>
                    </div>
                    <a href="#">
                        <img class="planet-picture" id="7" src="images/Planets/Uranus-Main2.jpg" alt="Uranus">
                    </a>
                </li>
                <li>
                    <div class="image_title">
                        <a href="#">Neptune</a>
                    </div>
                    <a href="#">
                        <img class="planet-picture" id="8" src="images/Planets/Neptune-Main.jpg" alt="Neptune">
                    </a>
                </li>
                <li>
                    <div class="image_title">
                        <a href="#">Pluto</a>
                    </div>
                    <a href="#">
                        <img class="planet-picture" id="9" src="images/Planets/Pluto-Main.jpg" alt="Pluto">
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div id="planet"></div>
    <div id="planet-attributes"></div>
    <div id="moon-instructions"></div>
    <div id="moon-pics">
        <div class="moon-row"></div>
    </div>
    <div id="moon"></div>
    <div id="moon-attributes"></div>
    `

    document.querySelector('body').innerHTML = snippet

    selectPlanet();
}
    
    
//click on explore moons button which passes in to another function the planet id to retrieve
//that planets moon/s if any. Add Boolean to planet data for planets that have moons. After 
//passing in id, need to clear selected planet "box" and
//need to render selected planets moons. Then user will be able to select from moon/s, and based
//on selection, clear the rendered moon/s, and fetch the associated data and render the selection.  
//Possible "reload/assign" reload button to start the planet selection or moon selection 
//processes again while keeping "logged-in" user's name.

//get moon pictures
//get all moon data
//set html to render moons and selected moon pics and data
