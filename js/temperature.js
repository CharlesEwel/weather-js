function Temperature(tempKelvin) {
  this.tempKelvin = tempKelvin;
}

Temperature.prototype.convertToCelsiusFahrenheit = function(isCelsius){
  var tempCelsius = this.tempKelvin - 273.15;
  if(isCelsius){
    return tempCelsius;
  } else {
    var tempFahreneit = (1.8*tempCelsius)+32;
    return tempFahreneit;
  }
}

exports.tempModule = Temperature;
