
//Onclick function for searchbar
$("#submit").on("click", function(){
  let cityName = $("#city-name").val();
//adding bootstrap classes for styling 
  $("#cardForecast").addClass("card");
  $("ul").addClass("list-group list-group-flush");
  $("li").addClass("list-group-item");
  //pushing cityname through the api call
  weatherData(cityName);
  fiveDay(cityName);
})

//API call for current weather data
function weatherData(city){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=4990a0ba671639637ded74843defb334",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    updateWeather(response);

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
  $("#currentWeather").append(`<p>Temperature: ${currentWeather.main.temp}<p>`);

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
$("#day1").append(`<li>Temperature: ${forecastData.list[0].main.temp}<li>`);

//append and the humidity
$("#day1").append(`<li>Humidity: ${forecastData.list[0].main.humidity}%<li>`);

//now for day2
$("#day2").append(`<li>Date: ${forecastData.list[1].dt_txt}<li>`);
$("#day2").append(`<li>Humidity: ${forecastData.list[1].main.humidity}%<li>`);
$("#day2").append(`<li>Temperature: ${forecastData.list[1].main.temp}<li>`);

//day3

$("#day3").append(`<li>Date: ${forecastData.list[2].dt_txt}<li>`);
$("#day3").append(`<li>Humidity: ${forecastData.list[2].main.humidity}%<li>`);
$("#day3").append(`<li>Temperature: ${forecastData.list[2].main.temp}<li>`);

//day4

$("#day4").append(`<li>Date: ${forecastData.list[3].dt_txt}<li>`);
$("#day4").append(`<li>Humidity: ${forecastData.list[3].main.humidity}%<li>`);
$("#day4").append(`<li>Temperature: ${forecastData.list[3].main.temp}<li>`);

//day5

$("#day5").append(`<li>Date: ${forecastData.list[4].dt_txt}<li>`);
$("#day5").append(`<li>Humidity: ${forecastData.list[4].main.humidity}%<li>`);
$("#day5").append(`<li>Temperature: ${forecastData.list[4].main.temp}<li>`);

}


//remove list class until onclick

