let puntos = 0;
let tiempo = 30;
let jugando = false;
let temporizador;
let temporizadorMovimiento;

const gatito = document.getElementById("gatito");
const puntosTexto = document.getElementById("puntos");
const tiempoTexto = document.getElementById("tiempo");
const boton = document.getElementById("iniciar");
const juego = document.getElementById("juego");

boton.addEventListener("click", iniciarJuego);

gatito.addEventListener("click", atraparGatito);

function iniciarJuego() {
    puntos = 0;
    tiempo = 30;
    jugando = true;

    puntosTexto.textContent = puntos;
    tiempoTexto.textContent = tiempo;

    boton.disabled = true;

    moverGatito();

    // El gatito se mueve solo cada 0.8 segundos
    temporizadorMovimiento = setInterval(moverGatito, 800);

    temporizador = setInterval(() => {
        tiempo--;
        tiempoTexto.textContent = tiempo;

        if (tiempo <= 0) {
            terminarJuego();
        }
    }, 1000);
}

function atraparGatito() {
    if (!jugando) {
        return;
    }

    puntos++;
    puntosTexto.textContent = puntos;

    moverGatito();
}

function moverGatito() {
    const ancho = juego.clientWidth - gatito.offsetWidth;
    const alto = juego.clientHeight - gatito.offsetHeight;

    const nuevaX = Math.random() * ancho;
    const nuevaY = Math.random() * alto;

    gatito.style.left = nuevaX + "px";
    gatito.style.top = nuevaY + "px";
}

function terminarJuego() {
    jugando = false;

    clearInterval(temporizador);
    clearInterval(temporizadorMovimiento);

    boton.disabled = false;

    alert("🐱 ¡Se acabó el tiempo! 🐱\n\nTu puntuación fue: " + puntos);
}