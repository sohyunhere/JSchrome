const API_KEY = "77d7e2da857a8deb2a080919d7182be4";
function onGeoOk(postition) {
    const lat = postition.coords.latitude;
    const lon = postition.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;

    });
}

function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);