import React, { useEffect, useState } from 'react';
import './Contador.css';
function inicializarContadores() {
    let totalPessoas = 0;
    let homens = 0;
    let mulheres = 0;

    const totalElement = document.getElementById("total");
    const homensElement = document.getElementById("homens");
    const mulheresElement = document.getElementById("mulheres");
    const incrementarHomensButton = document.getElementById("incrementarHomens");
    const decrementarHomensButton = document.getElementById("decrementarHomens");
    const incrementarMulheresButton = document.getElementById("incrementarMulheres");
    const decrementarMulheresButton = document.getElementById("decrementarMulheres");
    const resetarButton = document.getElementById("resetar");

    function atualizarContagens() {
        totalElement.textContent = totalPessoas;
        homensElement.textContent = homens;
        mulheresElement.textContent = mulheres;
    }

    incrementarHomensButton.addEventListener("click", function () {
        homens++;
        totalPessoas++;
        atualizarContagens();
    });

    decrementarHomensButton.addEventListener("click", function () {
        if (homens > 0) {
            homens--;
            totalPessoas--;
            atualizarContagens();
        }
    });

    incrementarMulheresButton.addEventListener("click", function () {
        mulheres++;
        totalPessoas++;
        atualizarContagens();
    });

    decrementarMulheresButton.addEventListener("click", function () {
        if (mulheres > 0) {
            mulheres--;
            totalPessoas--;
            atualizarContagens();
        }
    });

    resetarButton.addEventListener("click", function () {
        totalPessoas = 0;
        homens = 0;
        mulheres = 0;
        atualizarContagens();
    });

    atualizarContagens();
}

window.addEventListener("load", inicializarContadores);
