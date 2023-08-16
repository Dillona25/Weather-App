//* API elements
const apiKey = "feb4c18ca4cffb957bfa4ba9d695abed";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

//* Search Elements
const searchBox = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

//* Weather Elements
const weatherImage = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

//* Function to fetch API and display proper values as well as error message
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    document.querySelector(".error-message").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "mph";

    if (data.weather[0].main === "Clouds") {
      weatherImage.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherImage.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherImage.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherImage.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherImage.src = "images.mist.png";
    }
    document.querySelector(".error-message").style.display = "none";
    document.querySelector(".weather").style.display = "block ";
  }
}

//* Event listener to search city
searchButton.addEventListener("click", (evt) => {
  weather.classList.add("weather-active");
  checkWeather(searchBox.value);
  evt.preventDefault();
});
