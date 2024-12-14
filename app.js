"use strict";

function toggleMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const swiper = document.querySelector('.swiper');

    if (nav && hamburger) {
        const isMenuOpen = nav.classList.toggle('abrir');
        hamburger.classList.toggle('ativo');

        if (isMenuOpen) {
            // Menu aberto, desabilita interações com o swiper
            swiper.classList.add('invisible');
        } else {
            // Menu fechado, habilita interações com o swiper após atraso
            setTimeout(() => {
                swiper.classList.remove('invisible');
            }, 500); // Atraso para que o menu tenha tempo de abrir
        }
    }
}

//Swiper

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

