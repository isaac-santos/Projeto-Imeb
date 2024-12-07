"use strict";

function toggleMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    if (nav && hamburger) {
        
        nav.classList.toggle('abrir');
        
        
        hamburger.classList.toggle('ativo');
    }
}