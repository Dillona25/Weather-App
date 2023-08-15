const apiKey = "feb4c18ca4cffb957bfa4ba9d695abed";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "mph";
}

searchButton.addEventListener("click", (evt) => {
  checkWeather(searchBox.value);
  evt.preventDefault();
});
