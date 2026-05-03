"use strict";

let lampada = document.getElementById("lampada");
let piscando = false;
let piscarInterval;

function ligar() {
    lampada.setAttribute("src", "img/luzLigada.gif");
    lampada.setAttribute("alt", "Lampada Ligada");
}

function apagar() {
    lampada.setAttribute("src", "img/luzDesligada.gif");
    lampada.setAttribute("alt", "Lampada Desligada");
}

function sumir() {
    lampada.style.opacity = 0;
}

function aparecer() {
    lampada.style.opacity = 1;
}

function piscar() {
    if (lampada.getAttribute("src") == "img/luzDesligada.gif") {
        ligar();
    } else if (lampada.getAttribute("src") == "img/luzLigada.gif") {
        apagar();
    }
}

function piscarAutomatico() {
    if (!piscando) {
        piscarInterval = setInterval(piscar, 500);
        piscando = true;
    }
}

function pararPiscar() {
    if (piscando) {
        clearInterval(piscarInterval);
        piscando = false;
    }
}
