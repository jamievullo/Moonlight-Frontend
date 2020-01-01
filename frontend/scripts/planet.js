const planetUrl = `${targetUrl}/planets`;
const moonUrl = `${targetUrl}/moons`;

const clearForm = document.getElementById('user-form');
const clearMainImage = document.getElementById('main-pic');

function renderPlanets() {
    //clear form and main image
    clearForm.innerHTML = "";
    clearMainImage.remove();
    const selectPicElement = document.getElementById('planet-pics');
    const loadPics = `
    <section id="photos">
        <img id="pic" src="images/Planets/Earth-Main2.jpg" alt="" height="300" width="500">
        <img id="pic" src="images/Planets/Pluto-Main.jpg" alt="" height="300" width="500">
        <img id="pic" src="images/Planets/Jupiter-Main.jpg" alt="" height="300" width="500">
        <img id="pic" src="images/Planets/Mars-Main6.jpg" alt="" height="300" width="500">
        <img id="pic" src="images/Planets/Mercury-Colored1.jpg" alt="" height="300" width="500">      
        <img id="pic" src="images/Planets/Neptune-Main.jpg" alt="" height="300" width="500">
        <img id="pic" src="images/Planets/Uranus-Main2.jpg" alt="" height="300" width="500">
        <img id="pic" src="images/Planets/Venus-Main3.jpg" alt="" height="300" width="500">
        <img id="pic" src="images/Planets/Saturn-Main-Main.png" alt="" height="300" width="500">      
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
    const selectFromPlanets = document.querySelectorAll('#pic')
    // iterate over pic collection and add event listener for which pic is being
    // selected(event.target). Can use planet.target also since it gets iterated over.
    selectFromPlanets.forEach(planet => {
        planet.addEventListener('click', e => {
        console.log(e.target);
        })
    })
}

