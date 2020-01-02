const planetUrl = `${targetUrl}/planets`;
const moonUrl = `${targetUrl}/moons`;
const clearForm = document.getElementById('user-form');
const clearMainImage = document.getElementById('main-pic');
const clearwelcomeUserBox = document.getElementById('welcome-user');
const clearPlanetPics = document.getElementById('planet-pics');

function renderPlanets() {
    //clear form and main image
    clearForm.innerHTML = "";
    clearMainImage.remove();
    const selectPicElement = document.getElementById('planet-pics');
    const loadPlanetPics = `
        <section id="photos">
            <img class="planet-picture" id="1" src="images/Planets/Mercury-Colored1.jpg" alt="" height="300" width="500">      
            <img class="planet-picture" id="4" src="images/Planets/Mars-Main6.jpg" alt="" height="300" width="500">
            <img class="planet-picture" id="7" src="images/Planets/Uranus-Main2.jpg" alt="" height="300" width="500">
            <img class="planet-picture" id="2" src="images/Planets/Venus-Main3.jpg" alt="" height="300" width="500">
            <img class="planet-picture" id="5" src="images/Planets/Jupiter-Main.jpg" alt="" height="300" width="500">
            <img class="planet-picture" id="8" src="images/Planets/Neptune-Main.jpg" alt="" height="300" width="500">
            <img class="planet-picture" id="3" src="images/Planets/Earth-Main2.jpg" alt="" height="300" width="500">
            <img class="planet-picture" id="6" src="images/Planets/Saturn-Main-Main2.jpeg" alt="" height="300" width="500">      
            <img class="planet-picture" id="9" src="images/Planets/Pluto-Main.jpg" alt="" height="300" width="500">
        </section>`;
    //render planets
    selectPicElement.innerHTML = loadPlanetPics;
}

function welcomeUser(data) {
    const welcomeUserBox = document.getElementById('welcome-user');
    //create variable that displays welcome message based on username.
    const welcome = `<div><h2><center>Welcome ${data}, please select a Planet 
    by clicking on its image</center></h2></div>`;

    welcomeUserBox.innerHTML = welcome;
    selectPlanet();
}

function selectPlanet() {
    // set variable to pic id for planets
    const selectFromPlanets = document.querySelectorAll('.planet-picture');
    // iterate over pic collection and listen for which pic is being
    // selected then pass in resulting(e.target.outerHTML) into renderSelectedPlanet().
    selectFromPlanets.forEach(planet => {
        planet.addEventListener('click', e => {            
            renderSelectedPlanet(e.target.outerHTML);
            //console.log(e.target.outerHTML);
            fetchPlanetData(e.toElement.id);//gets pic id from selected planet to compare to DB id to render planets data
            //return e.toElement.id
        })
    })
    
}

function fetchPlanetData(id) { //need to pass in db "id" of selected planet
    fetch(planetUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        fetchSelectedPlanetData(data, id);
    })
}    

function renderSelectedPlanet(planet) { //passes in e.target.outerHTML
    clearPlanetPics.remove();
    clearwelcomeUserBox.remove();
    const planetElement = document.getElementById('planet');
    const selection = `<div class="second-render">${planet}</div>`;
    //renders planet picture to 'planet' html element
    planetElement.innerHTML = selection;    
}

//takes all planet objects and selects the planet based on id and image id comparison
function fetchSelectedPlanetData(planetData, id) {
    fetch(`${planetUrl}/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        chosenPlanet = new Planet(data.name, data.size, data.distance, data.orbital_period, data.day_length, data.gravity, data.description, data.link)
        renderPlanetData(chosenPlanet)
    })

}

let chosenPlanet; 

class Planet {
    constructor(name, size, distance, orbital_period, day_length, gravity, description, link) {
    this.name = name
    this.size = size
    this.distance = distance
    this.orbital_period = orbital_period
    this.day_length = day_length
    this.gravity = gravity
    this.description = description
    this.link = link 
    }
}

function renderPlanetData() {
    const planetAttributeElement = document.getElementById('planet-attributes');
    const planetButtons = `<div class="planet-data">${this.name}</div>`;
    planetAttributeElement.innerHTML = planetButtons
}
