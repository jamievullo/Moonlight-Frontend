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
    const loadPics = `
    <section id="photos">
        <img class="planet-picture" id="1" src="images/Planets/Earth-Main2.jpg" alt="" height="300" width="500">
        <img class="planet-picture" id="2" src="images/Planets/Pluto-Main.jpg" alt="" height="300" width="500">
        <img class="planet-picture" id="3" src="images/Planets/Jupiter-Main.jpg" alt="" height="300" width="500">
        <img class="planet-picture" id="4" src="images/Planets/Mars-Main6.jpg" alt="" height="300" width="500">
        <img class="planet-picture" id="5" src="images/Planets/Mercury-Colored1.jpg" alt="" height="300" width="500">      
        <img class="planet-picture" id="6" src="images/Planets/Neptune-Main.jpg" alt="" height="300" width="500">
        <img class="planet-picture" id="7" src="images/Planets/Uranus-Main2.jpg" alt="" height="300" width="500">
        <img class="planet-picture" id="8" src="images/Planets/Venus-Main3.jpg" alt="" height="300" width="500">
        <img class="planet-picture" id="9" src="images/Planets/Saturn-Main-Main.png" alt="" height="300" width="500">      
    </section>`;

    selectPicElement.innerHTML = loadPics;

    welcomeUser();
}

function welcomeUser() {
    const welcomeUserBox = document.getElementById('welcome-user');
    //create variable that displays welcome message based on username and id??
    const welcome =
        `<div><h1><center>Welcome, please select a Planet 
    by clicking on its image</center></h1></div>`;

    welcomeUserBox.innerHTML = welcome;
    selectPlanet();
}

function selectPlanet() {
    // set variable to pic id for planets
    const selectFromPlanets = document.querySelectorAll('.planet-picture');
    // iterate over pic collection and add event listener for which pic is being
    // selected(e.target).
    selectFromPlanets.forEach(planet => {
        planet.addEventListener('click', e => {
            renderSelectedPlanet(e.target.outerHTML);//gets html for picture of planet to render
            //console.log(e.target.outerHTML);
            console.log(e.toElement.id);//gets pic id from selected planet to compare to DB id to render planets data
        })
    })
    fetch(planetUrl) //need to pass in db "id" of selected planet
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        })
}

function renderSelectedPlanet(planet) {
    clearPlanetPics.remove();
    clearwelcomeUserBox.remove();
    const planetElement = document.getElementById('planet');
    const selection = `
        ${planet}
    `;
    //renders planet picture to 'planet' html element
    planetElement.innerHTML = selection;
    //set
    const planetAttributeElement = document.getElementById('planet-attributes')
}

function renderSelectedPlanetData() {

}