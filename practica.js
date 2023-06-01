var Correcto;
var Intentoos = 0;
function generador() {
  return Math.floor(Math.random() * 100) + 1;
}
function Jugar() {
  Correcto = generador();
  Intentoos = 0;
  document.getElementById("numeroCorrecto").value = Correcto;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("intentos").innerHTML = "Intentos realizados: " + Intentoos;
}
function adivinar() {
  var Adivi = document.getElementById("numeroAdivinado").value;

  if (Adivi == Correcto) {
    document.getElementById("resultado").innerHTML = "Muy bien has Adivinado.";
    desactivarJuego();
  } else if (Adivi < Correcto) {
    document.getElementById("resultado").innerHTML = "Intenta con uno mayor.";
  } else {
    document.getElementById("resultado").innerHTML = "Intenta con uno menor.";
  }
  Intentoos++;
  document.getElementById("intentos").innerHTML = "Intentos: " + Intentoos;
}
function desactivarJuego() {
  document.getElementById("numeroAdivinado").disabled = true;
  document.getElementById("adivinarBtn").disabled = true;
}
