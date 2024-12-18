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

function adjustMenuOnResize() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');

    if (window.innerWidth > 768) {
        // Se a largura da tela for maior que 768px, mostrar o menu
        nav.classList.add('abrir');
        hamburger.classList.remove('ativo');  // Esconde o hambúrguer
    } else {
        // Se a largura da tela for menor que 768px, garantir que o menu hambúrguer seja visível
        nav.classList.remove('abrir');
        hamburger.classList.remove('ativo');  // Exibe o hambúrguer
    }
}

// Event listener para redimensionamento da tela
window.addEventListener('resize', adjustMenuOnResize);

// Chamada para ajustar o menu quando a página for carregada
window.addEventListener('DOMContentLoaded', adjustMenuOnResize);
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

//Animação

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Para de observar depois que aparece
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});