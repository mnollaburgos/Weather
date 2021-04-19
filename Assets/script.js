
//Onclick function for searchbar
$("#submit").on("click", function(){
  let cityName = $("#city-name").val();
//set name to local storage
  localStorage.setItem('cities', cityName);
//adding bootstrap classes for styling 
  $("#cardForecast").addClass("card");
  $("ul").addClass("list-group list-group-flush");
  $("li").addClass("list-group-item list-group-item-primary");
  //pushing cityname through the api call
  weatherData(cityName);
  fiveDay(cityName);
  getCities();
})

//Function to append our local storage to a list for them to search through
function getCities() {
  var searchedCities = localStorage.getItem('cities');
  $(".city").append(`<li> ${searchedCities} <li>`);
}
//API call for current weather data
function weatherData(city){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=4990a0ba671639637ded74843defb334",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    updateWeather(response);
    uvIndex(response.coord.lat, response.coord.lon);
  });
}

function uvIndex(lat, lon){
  $.ajax({
    url:"http://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=4990a0ba671639637ded74843defb334",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var p = $("<p>");
    p.text("UV Index: "+response.value);
    $("#currentWeather").append(p);
   // updateWeather(response);
  });
}

//function to update HTML Elements for Current weather city data 
function updateWeather(currentWeather){
  //append cityname to CurrentWeather
  $("#currentWeather").append(`<h1> ${currentWeather.name}<h1>`);

  //append date to currentWeather
  $("currentWeather").append(`<p>${currentWeather.dt}<p>`);

  //append humidity to our currentWeather Div
  $("#currentWeather").append(`<p>Humidity: ${currentWeather.main.humidity}%<p>`);

  //apppend temperature to our CurrentWeahter Div
  let tempK = currentWeather.main.temp;
  let tempF = Math.floor((tempK -273.15) * 1.80 + 32);
  $("#currentWeather").append(`<p>Temperature: ${tempF}F<p>`);

  //append wind speed to currentWeather
  $("#currentWeather").append(`<p>Wind Speed: ${currentWeather.wind.speed}<p>`);

//append UV index to currentWeather
}


//API call for Five-Day Forecast
function fiveDay(city){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&cnt=5&appid=4990a0ba671639637ded74843defb334",
    method: "GET"
  }).then(function(response) {
    console.log(response);

    updateForecast(response);
  });

}


//function to update HTML elements for 5day forecast
function updateForecast(forecastData){
//append date to forecast 
$("#day1").append(`<li>Date: ${forecastData.list[0].dt_txt}<li>`);

//append an icon representation of weather conditions

//append the temperature
let tempK1 = forecastData.list[0].main.temp;
let tempF1 = Math.floor((tempK1 - 273.15) * 1.80 + 32);   
$("#day1").append(`<li>Temperature: ${tempF1}<li>`);

//append and the humidity
$("#day1").append(`<li>Humidity: ${forecastData.list[0].main.humidity}%<li>`);

//now for day2
let tempK2 = forecastData.list[1].main.temp;
let tempF2 = Math.floor((tempK2 - 273.15) * 1.80 + 32);  
$("#day2").append(`<li>Date: ${forecastData.list[1].dt_txt}<li>`);
$("#day2").append(`<li>Humidity: ${forecastData.list[1].main.humidity}%<li>`);
$("#day2").append(`<li>Temperature: ${tempF2}<li>`);

//day3
let tempK3 = forecastData.list[2].main.temp;
let tempF3 = Math.floor((tempK3 - 273.15) * 1.80 + 32 );  
$("#day3").append(`<li>Date: ${forecastData.list[2].dt_txt}<li>`);
$("#day3").append(`<li>Humidity: ${forecastData.list[2].main.humidity}%<li>`);
$("#day3").append(`<li>Temperature: ${tempF3}<li>`);

//day4
let tempK4 = forecastData.list[3].main.temp;
let tempF4 = Math.floor((tempK4 - 273.15) * 1.80 + 32 );  
$("#day4").append(`<li>Date: ${forecastData.list[3].dt_txt}<li>`);
$("#day4").append(`<li>Humidity: ${forecastData.list[3].main.humidity}%<li>`);
$("#day4").append(`<li>Temperature: ${tempF4}<li>`);

//day5
let tempK5 = forecastData.list[4].main.temp;
let tempF5 = Math.floor((tempK5 - 273.15) * 1.80 + 32 );  
$("#day5").append(`<li>Date: ${forecastData.list[4].dt_txt}<li>`);
$("#day5").append(`<li>Humidity: ${forecastData.list[4].main.humidity}%<li>`);
$("#day5").append(`<li>Temperature: ${tempF5}<li>`);

}




