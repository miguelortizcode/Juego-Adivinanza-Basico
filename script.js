let numeroRandom = Math.floor(Math.random() * 100) + 1; // VARIABLE PARA NÚMEROS RANDOM
const btn = document.querySelector(".btn"); // VARIABLE DEL BOTON PARA ACTIVAR EL NÚMERO RANDOM
let numero = document.getElementById("numeroEntrada"); // VARIABLE PARA CAPTURAR EL NÚMERO
let mensaje = document.getElementById("mensaje"); // VARIABLE  CON EL MENSAJE DE ERROR
let intento = document.getElementById('intento');
let intentos = 0

btn.addEventListener("click", checkResultado); // EVENTO CLICK PARA DE LA FUNCIÓN QUE COMPRUEBA EL NÚMERO ELEGIDO
  // FUNCIÓN PARA COMPROBAR EL NUÚMERO ELEGIDO
function checkResultado() {
    intentos ++
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numero.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Por favor ingresa un número válido entre 1 y 100";
    return;
  }

  if(numeroIngresado === numeroRandom){
    mensaje.textContent = '¡Felicitaciones! Has adivinado el número.';
    mensaje.style.color = "green";
    numeroRandom.disabled = true;
  }else if(numeroIngresado < numeroRandom){
    mensaje.textContent = 'Intenta de nuevo! El número es mayor al que elegiste.';
    mensaje.style.color = "red";
  }else{
    mensaje.textContent = 'Intenta de nuevo! El número es menor al que elegiste.';
    mensaje.style.color = "red";
  }
}
