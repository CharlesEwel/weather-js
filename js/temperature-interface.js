var Temperature = require('./../js/temperature.js').tempModule;

$(document).ready(function() {
  $('.temperatureLocation').click(function() {
    var city = $('#temperature').val();
    $('#temperature').val("");
    var tempType = "celsius"===$(this).attr("tempType");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var currentTemp = new Temperature(response.main.temp);
      $('.showTemperature').text("The Temperature in " + city + " is " + currentTemp.convertToCelsiusFahrenheit(tempType) + " degrees.");
    });
  });
});
