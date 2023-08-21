document.addEventListener("DOMContentLoaded" , function() {
const searchBttn = document.querySelector('#search-bttn');
const apiKey = '3688a91907b1dc79ee3a1a6d35b8d76d';


async function giveFiveDayForecast(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiURL);
    const forecastData = await response.json(); 

    console.log(forecastData);

    const forecastContainer = document.querySelector('.forecast-container');
    forecastContainer.innerHTML = "";

    if (forecastData && forecastData.list) {
        for (let i = 0; i < forecastData.list.length; i += 8) {
            const forecast = forecastData.list[i];

            const forecastDiv = document.createElement("div");
            forecastDiv.classList.add("forecast-item");

            const forecastDate = new Date(forecast.dt * 1000);
            const iconCode = forecast.weather[0].icon;
            const temp = forecast.main.temp;``
            const windSpeed = forecast.wind.speed;
            const humidity = forecast.main.humidity;

            const forecastHTML = `
                <h3>${forecastDate.toLocaleDateString()}</h3>
                <img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">
                <p>Temperature: ${temp} °F</p>
                <p>Wind Speed: ${windSpeed} mph</p>
                <p>Humidity: ${humidity}%</p>
            `;

            forecastDiv.innerHTML = forecastHTML;
            forecastContainer.appendChild(forecastDiv);
        }
    } else {
        console.log("Error fetching forecast data");
    }
}



async function checkWeather(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiURL);
    var data = await response.json(); 

    console.log(data);
    console.log(apiURL);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".wind").innerHTML = `Wind: ${data.wind.speed} mph`
    document.querySelector(".humidity").innerHTML = `Humidity ${data.main.humidity}%`;

    searchedCities.push(city);
    localStorage.setItem('searchedCities',JSON.stringify(searchedCities));
}

const searchedCities =JSON.parse(localStorage.getItem('searchedCities')) || [];

searchBttn.addEventListener('click',function(){
    var city = document.querySelector("#inputText").value
    checkWeather(city);
    giveFiveDayForecast(city);
});

});





