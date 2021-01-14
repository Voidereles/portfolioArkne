// import './scripts/neumorphism.js';
import 'owl.carousel';
import 'bootstrap';
import PerfectScrollbar from 'perfect-scrollbar';
import AOS from 'aos';
// import anime from 'animejs/lib/anime.es.js';
import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';

const swup = new Swup({
    plugins: [new SwupOverlayTheme({
        color: '#216096',
        duration: 600,
        direction: 'to-right',
    })]
}); // only this line when included with script tag

AOS.init({
    duration: 700,
    // easing: 'cubic-bezier(.91, .11, .19, .92)'
    once: true
});

const ps = new PerfectScrollbar('body');


function logoBarDimensions() {
    let logoBarWidth = document.querySelector('.welcome__logo-bar').getBoundingClientRect().width / 2;
    let logoBarHeight = document.querySelector('.welcome__logo-bar').getBoundingClientRect().height;
    $('.welcome__logo-bar-helper').css('width', logoBarWidth + 'px');
    $('.welcome__logo-bar-helper').css('height', logoBarHeight + 'px');
}
$(function () {
    logoBarDimensions();
});

$(window).resize(function () {
    logoBarDimensions();
    ps.update();

});

if (window.innerWidth > 992) {
    const radials = document.querySelector(".about__radial-container");


    // document.querySelector('.about').addEventListener("mousemove", (e) => {
    //     radials.style.transform = "translateX(" + (-e.clientX) / 25 + "px)" + "translateY(" + (-e.clientY) / 5 + "px)";

    // });

    const allRadials = document.querySelectorAll(".about__radial");
    const radialBottomLeft = document.querySelector('.about-radial-1');
    // Array.from(allRadials).forEach(element => {
    //     element.addEventListener('click', () => {
    //         document.querySelector('.header__lang-active-text').innerHTML = element.textContent;
    //     });
    $(window).scroll(function () {

        let counter = $('.about__heading');
        let oTop = counter.offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            setTimeout(function () {
                document.querySelector('.about').addEventListener("mousemove", (e) => {
                    // radials.style.transform = "translateX(" + (-e.clientX) / 25 + "px)" + "translateY(" + (-e.clientY) / 5 + "px)";

                    Array.from(allRadials).forEach(element => {
                        element.style.transitionDelay = "0s";
                        element.style.transitionDuration = "0.5s";
                        element.style.transform = "rotate(" + ((-e.clientX) / 15 + (-e.clientY) / 15) + "deg)";
                        // element.style.transform = "translateX(" + (-e.clientX) / 33 + "px)" + "translateY(" + (-e.clientY) / 20 + "px)";
                        // element.addEventListener('click', () => {
                        // document.querySelector('.header__lang-active-text').innerHTML = element.textContent;
                        // });

                    });
                });
            }, 3500);
        }
        a = 1;
    });



}