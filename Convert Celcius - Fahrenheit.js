function convertToF(celsius) {

  var fahrenheit = celsius * (9 / 5) + 32;  //Menghitung Celcius ke Fahrenheit
  if (typeof fahrenheit !== "undefined") {  //Jika fahrenheit undefined
    return fahrenheit;
  } else {
    return "fahrenheit not defined";
  }
}
convertToF(30);       //input suhu dalam celcius
