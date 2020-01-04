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
    }
}

function listenForMoonSubmit() {
    const retrieveMoons = document.getElementById('moon-button');
    retrieveMoons.addEventListener('click', e => {
        console.log(e.target.id)
        renderMoons(e.target.id)
    });
}

function renderMoons() {
    clearChosenPlanetPic.remove()
    const selectMoonElement = document.getElementById('moon-pics')
    const displayMoons = `
    <div><h1>Hello</h1></div>`
    selectMoonElement.innerHTML = displayMoons 
}

//click on explore moons button which passes in to another function the planet id to retrieve
//that planets moon/s if any. Add Boolean to planet data for planets that have moons. After passing in id, need to clear selected planet "box"and
//need to render selected planets moons. Then user will be able to select from moon/s, and based
//on selection, clear the rendered moon/s, and fetch the associated data and render the selection.  
//Possible "reload/assign" reload button to start the planet selection or moon selection 
//processes again while keeping "logged-in" user's name.

//get moon pictures
//get all moon data
//set html to render moons and selected moon pics and data
