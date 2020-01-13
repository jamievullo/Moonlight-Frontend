let chosenPlanet;
let chosenPlanetPicture;

class Planet {
    constructor(id, name, size, distance, orbital_period, day_length, gravity, description, link, has_moons) {
    this.id = id
    this.name = name
    this.size = size
    this.distance = distance
    this.orbital_period = orbital_period
    this.day_length = day_length
    this.gravity = gravity
    this.description = description
    this.link = link
    this.has_moons = has_moons
    }

    static renderPlanets() {
        const clearForm = document.getElementById('user-form');
        const clearMainImage = document.getElementById('main-pic');
        //clear form and main image
        clearForm.innerHTML = "";
        clearMainImage.remove();
        const selectPicElement = document.getElementById('planet-pics');
        const loadPlanetPics = `
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
    </div>`;
        //render planets
        selectPicElement.innerHTML = loadPlanetPics;
    }

    static renderSelectedPlanet(chosenPlanet) { //passes in e.target.previousElementSibling.outerHTML
        //debugger
        const clearWelcomeUserBox = document.getElementById('welcome-user');
        const clearUserFormDiv = document.getElementById('user-form');
        const clearPlanetPics = document.getElementById('planet-pics');
        clearPlanetPics.remove();
        clearWelcomeUserBox.remove();
        clearUserFormDiv.remove();
        const planetElement = document.getElementById('planet');
        const selection = `
        <div class="second-render"></div>
            <div class="wrapper">
                <ul class="stage">
                    <li class="scene">
                        <div class="movie">
                            <div class="planet-animation">${chosenPlanetPicture}</div>
                            <div class="info">
                            <header>
                                <h1>${chosenPlanet.name}</h1>
                                <div class="size">Size: ${chosenPlanet.size}</div>
                                <div class="distance">Distance from Sun: ${chosenPlanet.distance}</div>
                                <div class="orbital-period">Orbital Period: ${chosenPlanet.orbital_period}</div>
                                <div class="day-length">Day Length: ${chosenPlanet.day_length}</div>
                                <div class="gravity">Gravity: ${chosenPlanet.gravity}</div>
                                <a href="${chosenPlanet.link}"/target="_blank">${chosenPlanet.link}</a>
                            </header>
                            <p>
                                <div class="description" style="color: white">${chosenPlanet.description}</div>
                                </p>
                                    ${renderMoonButton(chosenPlanet)}
                            </div>
                    </div>
                </li>
            </ul> 
        </div>`;
        //<button onclick="window.location.reload()">Reload</button>
        planetElement.innerHTML = selection;
        listenForMoonSubmit();
    }
}

function welcomeUser(name) {
    const welcomeUserBox = document.getElementById('welcome-user');
    //create variable that displays welcome message based on username.
    const welcome = `<div class="welcome"><h2 style="color: white"><center>Welcome ${name}, please select a Planet 
    by clicking on a tile.</center></h2></div>`;

    welcomeUserBox.innerHTML = welcome;
    selectPlanet();
}

function selectPlanet() {
    // set variable to pic id for planets
    const selectFromPlanets = document.querySelectorAll('.accordian');
    // iterate over pic collection and listen for which pic is being
    // selected then pass in resulting =>(e.target.outerHTML)=> into renderSelectedPlanet().
    selectFromPlanets.forEach(planet => {
        planet.addEventListener('click', e => {            
            //renderSelectedPlanet(e.target.outerHTML);
            chosenPlanetPicture = e.target.outerHTML
            //console.log(e)
            //console.log(e.target.outerHTML);
            //console.log(e.toElement.id)
            fetchSelectedPlanetData(e.toElement.id);//gets pic id from selected planet to compare to DB id to render planets data
        })
    })    
}


function renderMoonButton(chosenPlanet) {
    if(chosenPlanet.has_moons === "true" && chosenPlanet.id !== 3) {
        return `<button type="submit" id="moon-button">Explore the Moons of ${chosenPlanet.name}</button>`
    } else if(chosenPlanet.id === 3) {
        return `<button type="submit" id="moon-button">Explore the Moon of ${chosenPlanet.name}</button>`
    }
}

function fetchSelectedPlanetData(id) {
    fetch(`${targetUrl}/planets/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        chosenPlanet = new Planet(data.id, data.name, data.size, data.distance, data.orbital_period, data.day_length, data.gravity, data.description, data.link, data.has_moons)
        //console.log(chosenPlanet)
        Planet.renderSelectedPlanet(chosenPlanet);
    })
}