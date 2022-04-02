let Celsiusgrad
let ergebnis
function brechnen() {
    Celsiusgrad=parseInt(document.getElementById("Cfield").value);
    console.log(Celsiusgrad);
}
function addCelsius() {
    ergebnis  = Celsiusgrad * 9/5 +32 ;
    if (zahl > 0 && zahl < 0 ){
        document.getElementById("fahrenheitlist").innerHTML = ergebnis
    }
}

