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

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        loop: true, // Ativar o loop dos slides
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

    document.body.addEventListener('touchstart', () => {
        swiper.autoplay.start();
    });
});

