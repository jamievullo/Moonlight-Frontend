const navbar = () => {
    const navbarContainer = document.getElementById('navbar')
    const renderNavbar = 
    `<nav class="navbar">
            <div id="apd">Astonomy Pic of Day</div>
            <div id="ssl">Space Station Location</div>
            <div id="mrp">Mars Rover Photos</div>
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
        console.log(e)
        pickDateForm();
    })
}

const backToPlanetsNavbarListener = () => {
    const btpElement = document.getElementById('btp')
    btpElement.addEventListener('click', e => {
        Planet.rerenderPlanets();
    })
}

const listeners = () => {
    backToPlanetsNavbarListener();
    astronomyPicOfDayListener();
    spaceStationLocationListener();
}