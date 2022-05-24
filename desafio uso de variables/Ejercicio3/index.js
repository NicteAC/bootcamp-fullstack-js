var gradosCelcius = prompt("Ingrese grados celcius");

var gradosKelvin = parseInt(gradosCelcius) + 273.15;
alert("La temperatura en grados Kelvin es: " + gradosKelvin + "°");

var gradosFahrenheit = (parseInt(gradosCelcius) * 9) / 5 + 32;
alert("La temperatura en grados Fahrenheit es: " + gradosFahrenheit + "°")