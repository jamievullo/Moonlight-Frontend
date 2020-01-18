// let longStr;
// let latStr;

const spaceStationFetch = () => {
    fetch("http://api.open-notify.org/iss-now.json")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        let long = parseInt(data.iss_position.longitude)
        let lat = parseInt(data.iss_position.latitude)
        // longStr = (data.iss_position.longitude)
        // latStr = (data.iss_position.latitude)
        //trying to not have to write a second fetch
        // if(map != null) {
        //     initMap(lat, long);
        // } else {
        //     updatedLocation(lat, long);
        // }
        initMap(lat, long);
    });
}

let map;

function initMap(latitude, longitude) {
        // The location of ISS
    let ISSLocation = {lat: latitude, lng: longitude};
    // The map, centered at ISSLocation
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 3, center: ISSLocation});
    // The marker, positioned at ISSLocation
    let marker = new google.maps.Marker({position: ISSLocation, map: map});
}


const renderMap = () => {
    const sslElement = document.querySelector('body')
    const showMap = `
    <div id="navbar"></div>
    ${navbar()}
    <center><h2>This is the current location of the International Space Station</h2></center>
    <div id="map"></div>
    <center><button id="refresh" type="submit">Select to Auto-Refresh every 20 seconds</button></center>`;

    sslElement.innerHTML = showMap
    backToPlanetsNavbarListener();
    astronomyPicOfDayListener();
    refreshButtonListener();
}

const refreshButtonListener = () => {
    const refreshButton = document.getElementById('refresh')
    refreshButton.addEventListener('click', e => {
        console.log(e)
        refreshFetch();
    })
}

const refreshFetch = () => {
    fetch("http://api.open-notify.org/iss-now.json")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        const long = parseInt(data.iss_position.longitude)
        const lat = parseInt(data.iss_position.latitude)
        // longStr = (data.iss_position.longitude)
        // latStr = (data.iss_position.latitude)
        updatedLocation(lat, long)
    })
    setInterval(refreshFetch, 20000)
}

const updatedLocation = (latitude, longitude) => {
    let ISSLocation = {lat: latitude, lng: longitude};
    let marker = new google.maps.Marker({position: ISSLocation, map: map});
}