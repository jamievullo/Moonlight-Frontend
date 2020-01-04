const moonUrl = `${targetUrl}/moons`;
const clearChosenPlanetPic = document.getElementById('planet');

let chosenMoon; 

class Moon {
    constructor(name, size, orbital_period, gravity, description, link) {
    this.name = name
    this.size = size    
    this.orbital_period = orbital_period    
    this.gravity = gravity
    this.description = description
    this.link = link
    //this.planet_id = planet_id
    }
}

function listenForMoonSubmit() {
    const retrieveMoons = document.getElementById('moon-button');
    retrieveMoons.addEventListener('click', e => {
        console.log(chosenPlanet.id)
        console.log(e.target.id)
        fetchChosenPlanetMoonData() //(e.target.id)
    });
}

let chosenMoons;

function fetchChosenPlanetMoonData() {
    //fetch(`${moonUrl}/${chosenPlanet.id}`) //this worked but returned the moon with id of planet id
    fetch(`${moonUrl}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        chosenMoons = new Moon(data.id, data.name, data.size, data.orbital_period, data.gravity, data.description, data.link)
        // have to add data.planet_id
        console.log(chosenMoons)
        //renderMoons(chosenMoons);
    })
}

// function renderMoons(chosenMoons) {
//     clearChosenPlanetPic.remove()
//     const selectMoonElement = document.getElementById('moon-pics')
//     const displayMoons = //display moon pics
//     `<div><h1>Moon pic</h1></div>`
//     selectMoonElement.innerHTML = displayMoons 
// }


//click on explore moons button which passes in to another function the planet id to retrieve
//that planets moon/s if any. Add Boolean to planet data for planets that have moons. After passing in id, need to clear selected planet "box"and
//need to render selected planets moons. Then user will be able to select from moon/s, and based
//on selection, clear the rendered moon/s, and fetch the associated data and render the selection.  
//Possible "reload/assign" reload button to start the planet selection or moon selection 
//processes again while keeping "logged-in" user's name.

//get moon pictures
//get all moon data
//set html to render moons and selected moon pics and data
