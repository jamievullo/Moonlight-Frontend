document.addEventListener('DOMContentLoaded', function() {
    //after content loads fire userForm() function and load form.
    //listenForSubmit() listens for submit and sets 
    //userName to value submitted on form.
    userForm();
    listenForSubmit();

});

//sets form for userName to be persisted to database and welcomes user.
function userForm() {
    const form = `<div class="jumbotron" id="new-user-form">
    <center>
        <h2>Welcome to Project Moonlight where we 
        will explore the Planets and Moons 
        of our solar system</h2>
        <form>
            <div>
                <label for"userName>User Name:</label>
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
        //prevents default for start exploring button.
        e.preventDefault();
        //sets userName to value inputted on form.
        const userName = e.target.value;
        console.log(userName);
        //fires postUser() function to create new user object in database.
        postUser(userName);
    });
}

function postUser(name) {
    let user = {
        name: `${name}`
    };
    let configObj = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(user)
    };
    fetch("https://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    });
}

