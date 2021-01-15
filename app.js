// import './scripts/neumorphism.js';
import 'owl.carousel';
import 'bootstrap';
import PerfectScrollbar from 'perfect-scrollbar';
import AOS from 'aos';
// import anime from 'animejs/lib/anime.es.js';
import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';
import './scripts/logoBarScript.js';
import './scripts/headerScript.js';

const swup = new Swup({
    plugins: [new SwupOverlayTheme({
        color: '#3D5F7C',
        duration: 600,
        direction: 'to-right',
    })]

});

AOS.init({
    duration: 700,
    // easing: 'cubic-bezier(.91, .11, .19, .92)'
    once: true
});

const ps = new PerfectScrollbar('body');


function init() {
    if (document.querySelector('.about')) {

        if (window.innerWidth > 992) {
            if (typeof (document.querySelector('.about')) != 'undefined' && document.querySelector('.about') != null) {
                console.log('inner about');
                document.getElementById("header").style.display = "flex";
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
                                console.log('dasda');
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




        }
    }

    if (document.querySelector('.welcome')) {
        document.getElementById("header").style.display = "none";
    }

    if (document.querySelector('#something-else')) {
        // ...
    }
}

init();

swup.on('contentReplaced', init);