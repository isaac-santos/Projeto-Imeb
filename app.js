"use strict";

function toggleMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const logo = document.querySelector('.logo');
    if (nav && hamburger) {
        
        nav.classList.toggle('abrir');
        
        
        hamburger.classList.toggle('ativo');

        logo.classList.toggle('ativo');
    }
}