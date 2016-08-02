var Temperature = require('./../js/temperature.js').tempModule;

$(document).ready(function() {
  $('.comparisonLocation').click(function() {
    var city1 = $('#comparison1').val();
    $('#comparison1').val("");
    var city2 = $('#comparison2').val();
    $('#comparison2').val("");
    var tempType = "celsius"===$(this).attr("tempType");
    var city1Kelvin=0;
    var city2Kelvin=0;
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city1 + '&appid=' + apiKey).then(function(response) {
      city1Kelvin=response.main.temp;
      console.log(response.main.temp);
    });
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city2 + '&appid=' + apiKey).then(function(response) {
      city2Kelvin=response.main.temp;
    });
    console.log(city1Kelvin);
    var currentTemp1 = new Temperature(city1Kelvin);
    var currentTemp2 = new Temperature(city2Kelvin);
    var difference = currentTemp1.convertToCelsiusFahrenheit(tempType)-currentTemp2.convertToCelsiusFahrenheit(tempType)-

    $('.showTemperatureComparison').text("The Temperature Difference between " + city1 + " and " + city2 + " is " + difference + " degrees.");
  });
});
