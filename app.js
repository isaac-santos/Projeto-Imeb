"use strict";

function toggleMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const swiper = document.querySelector('.swiper');

    if (nav && hamburger) {
        nav.classList.toggle('abrir')
        hamburger.classList.toggle('ativo');
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

//Data para imagens

const hoje = new Date();
const mesAtual = hoje.getMonth();
const diaAtual= hoje.getDate();

if(mesAtual === 8) {
    document.getElementById('setembro').style.display ='block';
}else if (mesAtual === 9) {
    document.getElementById('outubro').style.display ='block';
}else if (mesAtual === 10){
    document.getElementById('novembro').style.display ='block';
}else if (mesAtual === 11) {
    if(diaAtual >= 23 && diaAtual  <= 27) {
        document.getElementById('natal').style.display ='block';
    }else if (diaAtual >= 28 && diaAtual <= 31) {
        document.getElementById('ano-novo').style.display ='block';
    }
}else if (mesAtual === 0 && diaAtual === 1) {
    document.getElementById('ano-novo').style.display = 'block';
};






