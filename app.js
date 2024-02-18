const encodedApiKey = document.currentScript.getAttribute('data-api-key');
const apikey = atob(encodedApiKey);
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
        let data = await await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        let snap = data.weather[0].main;
        console.log(snap)
        switch (snap) {
            case 'Clouds':
                weatherIcon.src = "./images/clouds.png";
                break;
            case 'Clear':
                weatherIcon.src = "./images/clear.png"
                break;
            case 'Mist':
                weatherIcon.src = "./images/mist.png"
                break;
            case 'Drizzle':
                weatherIcon.src = "./images/drizzle.png"
                break;
            case 'Humidity':
                weatherIcon.src = "./images/humidity.png"
                break;
            case 'Rain':
                weatherIcon.src = "./images/rain.png"
                break;
            case 'Snow':
                weatherIcon.src = "./images/snow.png"
                break;
            case 'Wind':
                weatherIcon.src = "./images/wind.png"
                break;

        }
    }


}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
