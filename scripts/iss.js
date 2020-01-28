let mymap;
let marker;

const renderMap = () => {
    const sslElement = document.querySelector('body')
    const showMap = `
    <div id="navbar"></div>
    ${navbar()}
    <center><h2>This is the Current Location of the International Space Station</h2>
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
    //const tileUrl = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
    //JS object literal like JSON
    let ISSIcon = L.icon({
        iconUrl: 'images/ISS-MainImage-0.png',    
        iconSize:     [50, 50], // size of the icon
        iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
    });
    //sets initial marker position to center of map and created icon
    marker = L.marker([0, 0], { icon: ISSIcon }).addTo(mymap);

    backToPlanetsNavbarListener();
    astronomyPicOfDayListener();
    quizListener();
    refreshButtonListener();
}

async function spaceStationFetch() {
    const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
    const response = await fetch(api_url);
    const data = await response.json();
    //.catch(err => alert(err))
    const latitude = data.latitude
    const longitude = data.longitude
    // Always set the view to current latitude,longitude, and zoom
    //checks to see if first load, if not just rerender position from last position
    let firstTime = true;
    if (firstTime) {
        mymap.setView([latitude, longitude], mymap.getZoom());
    firstTime = false;
    }
    marker.setLatLng([latitude, longitude]);   
    //toFixed cuts down decimal places to what is passed in
    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2); 
}

const refreshButtonListener = () => {
    const refreshButton = document.getElementById('refresh')
    refreshButton.addEventListener('click', e => {
        //console.log(e)
        spaceStationFetch();
    })
}