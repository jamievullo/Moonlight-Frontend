#photos {
    /* Prevent vertical gaps */
    line-height: 0;

    -webkit-column-count: 3;
    -webkit-column-gap: 0px;
    -moz-column-count: 3;
    -moz-column-gap: 0px;
    column-count: 3;
    column-gap: 0px;
}

#photos img {    
    width: 100% !important;
    height: 33% !important;
}

@media (max-width: 1500px) {
    #photos {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
    }
}

/* set columns to two on screens 950px wide or less*/
@media (max-width: 950px) {
    #photos {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
    }
}

/* set columns to one on screens 550px wide or less*/
@media (max-width: 550px) {
    #photos {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
    }
}

/* class for second rendering of planet picture */
.second-render {
    margin-top: 100px;
}


<section id="photos">
            <img class="planet-picture" id="1" src="images/Planets/Mercury-Colored1.jpg" alt="Mercury" height="300" width="500">      
            <img class="planet-picture" id="4" src="images/Planets/Mars-Main6.jpg" alt="Mars" height="300" width="500">
            <img class="planet-picture" id="7" src="images/Planets/Uranus-Main2.jpg" alt="Uranus" height="300" width="500">
            <img class="planet-picture" id="2" src="images/Planets/Venus-Main3.jpg" alt="Venus" height="300" width="500">
            <img class="planet-picture" id="5" src="images/Planets/Jupiter-Main.jpg" alt="Jupiter" height="300" width="500">
            <img class="planet-picture" id="8" src="images/Planets/Neptune-Main.jpg" alt="Neptune" height="300" width="500">
            <img class="planet-picture" id="3" src="images/Planets/Earth-Main2.jpg" alt="Earth" height="300" width="500">
            <img class="planet-picture" id="6" src="images/Planets/Saturn-Main-Main2.jpeg" alt="Saturn" height="300" width="500">      
            <img class="planet-picture" id="9" src="images/Planets/Pluto-Main.jpg" alt="Pluto" height="300" width="500">
        </section>`;