// Ini file Javascript
document.addEventListener("DOMContentLoaded", function () {
    const inputCelcius = document.getElementById("main-input");
    const resultFahrenheit = document.getElementById("main-result");
    const caraKonversi = document.getElementById("cara-konversi");
    const btnKonversi = document.querySelector(".btn-konversi");
    const btnReset = document.querySelector(".btn-reset");
    const btnReverse = document.querySelector(".btn-reverse");

    function konversiCelciusKeFahrenheit(celcius) {
        return (celcius * 9/5) + 32;
    }

    function konversiFahrenheitKeCelcius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    btnKonversi.addEventListener("click", function (event) {
        event.preventDefault();
        
        let inputValue = parseFloat(inputCelcius.value);
        
        if (!isNaN(inputValue)) {
            let result = konversiCelciusKeFahrenheit(inputValue);
            resultFahrenheit.value = result.toFixed(2);
            caraKonversi.value = `${inputValue}°C × (9/5) + 32 = ${result.toFixed(2)}°F`;
        } else {
            alert("Masukkan angka yang valid");
        }
    });

    btnReset.addEventListener("click", function (event) {
        event.preventDefault();
        inputCelcius.value = "";
        resultFahrenheit.value = "";
        caraKonversi.value = "";
    });

    btnReverse.addEventListener("click", function (event) {
        event.preventDefault();
        
        let inputValue = parseFloat(resultFahrenheit.value);
        
        if (!isNaN(inputValue)) {
            let result = konversiFahrenheitKeCelcius(inputValue);
            inputCelcius.value = result.toFixed(2);
            caraKonversi.value = `(${inputValue}°F - 32) × (5/9) = ${result.toFixed(2)}°C`;
        } else {
            alert("Masukkan angka yang valid di kolom Fahrenheit");
        }
    });
});