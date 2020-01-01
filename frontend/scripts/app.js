const targetUrl = "http://localhost:3000"
const userUrl = `${targetUrl}/users`
// const planetUrl = `${targetUrl}/planets`
// const moonUrl = `${targetUrl}/moons`

document.addEventListener('DOMContentLoaded', function() {
    //after content loads fire userForm() function and load form.
    //listenForSubmit() listens for submit event and 
    //sets userName to value submitted on form.
    userForm();
    listenForSubmit();
});

//creates form for userName to be persisted to database and welcomes user.
function userForm() {
    const form = `<div class="jumbotron" id="new-user-form">
    <center>
        <h2 style="color: white">Welcome to Project Moonlight where we 
        will explore the Planets and Moons 
        of our Solar System</h2>
        <form>
            <div>
                <label for"userName" style="color: white">Username:</label>
                <input type="text" id="userName" name="userName">
            </div>
            <button type="submit">Start Exploring</button>
        </form>
    </center>
    </div>`;

    const formContent = document.getElementById('user-form');
    formContent.innerHTML = form;
}

function listenForSubmit() {
    const newUserForm = document.getElementById('new-user-form');

    newUserForm.addEventListener('submit', e => {
        //prevents default for start exploring(submit) button.
        e.preventDefault();
        //sets userName to value user inputs on form.
        const userName = e.target.elements["0"].value;
        console.log(userName);
        //fires postUser() function to create new user object in database.
        postUser(userName);
    });
}

function postUser(name) {
    let user = {
        name: `${name}`
    };
    let configObject = {
        method: "POST",  //telling fetch() that this is a post request.
        headers: {    //metadata of actual data in key/value pairs
        "Content-Type": "application/json", //what format data being sent is in. 
        "Accept": "application/json"  //tells server we accept data in this format for response.
    },
    body: JSON.stringify(user)  //data being sent in fetch() needs to be stored in the
                                //"body" of the configObj and converted to a string
    };
    fetch(userUrl, configObject) //destination url and object passed into fetch function.
    .then(function(response) { //fn passed response object representing what server sends back
        return response.json(); //json()method converts JSON to JS object.
    })
    .then(function(data) {
        setUsers(data)
        console.log(data)
    // .catch(function(err) {
    //     console.log(err)
    //     })
    });
    //after saving userName to database render planets to select from.
    //function in planet.js
    renderPlanets();
}

// class User {
//     constructor(name, userId) {
//         this.name = name 
//         this.userId = userId
//     }
// }
let user;

function setUsers(data) {
    console.log(data);


    //user = new User(data.name, data.user_id)
}