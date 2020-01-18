
// const spaceStationFetch = () => {
//     fetch("https://api.wheretheiss.at/v1/satellites/25544")
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data)
//         let long = parseInt(data.iss_position.longitude)
//         let lat = parseInt(data.iss_position.latitude)
//         //trying to not have to write a second fetch
//         // if(map != null) {
//         //     initMap(lat, long);
//         // } else {
//         //     updatedLocation(lat, long);
//         // }
//         //initMap(lat, long);
//     });
// }

// let map;

// function initMap(latitude, longitude) {
//         // The location of ISS
//     let ISSLocation = {lat: latitude, lng: longitude};
//     // The map, centered at ISSLocation
//     map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 3, center: ISSLocation});
//     // The marker, positioned at ISSLocation
//     let marker = new google.maps.Marker({position: ISSLocation, map: map});
// }


// const renderMap = () => {
//     const sslElement = document.querySelector('body')
//     const showMap = `
//     <div id="navbar"></div>
//     ${navbar()}
//     <center><h2>This is the current location of the International Space Station</h2>
//     </center>
//     <div id="map"></div>
//     <center><button id="refresh" type="submit">Refresh Location</button></center>`;

//     sslElement.innerHTML = showMap
//     backToPlanetsNavbarListener();
//     astronomyPicOfDayListener();
//     refreshButtonListener();
// }

// const refreshButtonListener = () => {
//     const refreshButton = document.getElementById('refresh')
//     refreshButton.addEventListener('click', e => {
//         console.log(e)
//         refreshFetch();
//     })
// }

// const refreshFetch = () => {
//     fetch("https://api.wheretheiss.at/v1/satellites/25544")
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         const long = parseInt(data.iss_position.longitude)
//         const lat = parseInt(data.iss_position.latitude)
//         updatedLocation(lat, long)
//     })
//     //setInterval(refreshFetch, 20000)
// }

// const updatedLocation = (latitude, longitude) => {
//     let ISSLocation = {lat: latitude, lng: longitude};
//     let marker = new google.maps.Marker({position: ISSLocation, map: map});
// }

let mymap;
let marker;

const renderMap = () => {
    const sslElement = document.querySelector('body')
    const showMap = `
    <div id="navbar"></div>
    ${navbar()}
    <center><h2>This is the current location of the International Space Station</h2>
    <div>
    <span>Latitude: <span id="lat"></span>°</span>
    <span>Longitude: <span id="lon"></span>°</span>
    </div>
    </center>
    <div id="map"></div>
    <center><button id="refresh" type="submit">Refresh Location</button></center>
    `;

    sslElement.innerHTML = showMap
    //leaflet.js gives access to library of functions ("L")
    mymap = L.map('map').setView([0, 0], 3);
    const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
    //sets initial marker position to center of map
    marker = L.marker([0, 0]).addTo(mymap);

    backToPlanetsNavbarListener();
    astronomyPicOfDayListener();
    refreshButtonListener();
}

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstTime = true;

async function spaceStationFetch() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;

    // Always set the view to current latitude,longitude, and zoom
    if (firstTime) {
    mymap.setView([latitude, longitude], mymap.getZoom());
    firstTime = false;
    }
    marker.setLatLng([latitude, longitude]);

    //toFixed cuts down decimal places to what is passed in
    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2); 
    
    //updateLocation();
}

const refreshButtonListener = () => {
    const refreshButton = document.getElementById('refresh')
    refreshButton.addEventListener('click', e => {
        console.log(e)
        spaceStationFetch();
    })
}

//let ufo;

// const updateLocation = () => {
//     const runTime = 0
//     const ufo = setInterval(spaceStationFetch, function() {
//         runTime += 1;
//         if(runTime === 20) {
//             clearInterval(ufo)
//         }
//     }, 1000);
// }

// const stopButtonListener = () => {
//     const stopButton = document.getElementById('stop')
//     stopButton.addEventListener('click', e => {
//         console.log(e)
//         //stopUpdatingLocation();
//     })
// }

// const stopUpdatingLocation = () => {
//     clearInterval(ufo)
// }