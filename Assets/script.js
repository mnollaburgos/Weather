$("#submit").on("click", function(){
  var cityName = $("#city-name").val();
  weatherData(cityName);
  fiveDay(cityName);
})


function weatherData(city){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=4990a0ba671639637ded74843defb334",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}

function fiveDay(city){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&cnt=5&appid=4990a0ba671639637ded74843defb334",
    method: "GET"
  }).then(function(response) {
    console.log("Forecast Data:"+JSON.stringify(response));
  });

}


//function to append information to divs/p tags for forecast


