const astronomyPicOfDayListener = () => {
    const apdElement = document.getElementById('apd')
    apdElement.addEventListener('click', e => {
        console.log(e)
        pickDateForm();
    })
}

const nasaFun = (addDate) => {
    const url = "https://api.nasa.gov/planetary/apod?api_key=feekrodts3wqORjT8ZkdMgr1WHJ1dq55QpD1Ibb6&"
    fetch(url + addDate)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        addImage(json[0].url);
        addTitle(json[0].title);
        addDescription(json[0].explanation);
        // console.log(json)
    })
    .catch(function (error) {
        console.log(error)
        const errorMessage = "Please select a valid date"
        const errorElement = document.createElement('h1')
        errorElement.innerText = errorMessage
        document.getElementById('img').appendChild(errorElement)
    })
    const showAPDImage = document.querySelector('.img')
    showAPDImage.classList.remove('d-none')
}

const getDate = () => {
    const submit = document.getElementById('button')
    submit.addEventListener('click', function (e) {
        e.preventDefault();

        const year = document.getElementById('year').value
        const month = document.getElementById('month').value
        const day = document.getElementById('day').value
        const date = `${year}-${month}-${day}`
        const addDate = `start_date=${date}&end_date=${date}`

        nasaFun(addDate)
    })
}

const addImage = (imageURL) => {
    const element = document.getElementById('showtime')
    element.src = imageURL
}

const addTitle = (title) => {
    const imageTitle = document.getElementById('title')
    imageTitle.innerText = title
}

const addDescription = (description) => {
    const imageDescription = document.getElementById('description')
    imageDescription.innerText = description
}

const pickDateForm = () => {
    const renderDateForm = document.querySelector('body')
    const dateForm = `
    <form>
    <center>
        <h2>Please Select Date:</h2>
        <select id="year">
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
        </select>

        <select id="month">
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>

        <select id="day">
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
        </select>

        <button type="submit" id="button">Submit</button>
    </form>
    <div class="img d-none">
        <img src="" id="showtime" width="800px" height="500px">
        <h3 id="title"></h3>
        <h4 id="description"></h4>
    </div>
    </center>`;
    renderDateForm.innerHTML = dateForm
    getDate();
}