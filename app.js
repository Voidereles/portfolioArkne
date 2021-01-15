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
let itemWidth, itemLeftPos;

function init() {
    if (document.querySelector('.about')) {

        if (window.innerWidth > 992) {
            if (typeof (document.querySelector('.about')) != 'undefined' && document.querySelector('.about') != null) {
                console.log('inner about');
                document.getElementById("header").style.display = "flex";
                // const radials = document.querySelector(".about__radial-container");
                const allRadials = document.querySelectorAll(".about__radial");
                // const radialBottomLeft = document.querySelector('.about-radial-1');


                let counter = $('.about__heading');
                let oTop = counter.offset().top - window.innerHeight;
                // if (a == 0 && $(window).scrollTop() > oTop) {

                setTimeout(function () {
                    document.querySelector('.about').addEventListener("mousemove", (e) => {
                        Array.from(allRadials).forEach(element => {
                            element.style.transitionDelay = "0.05s";
                            element.style.transitionDuration = "0.8s";
                            element.style.transform = "rotate(" + (((-e.clientX) / 10).toFixed(1) - ((-e.clientY) / 7)).toFixed(1) + "deg) translateX(" + ((-e.clientX) / 40).toFixed(0) + "px)" + "translateY(" + ((-e.clientY) / 33).toFixed(0) + "px)";
                        });
                    });
                }, 3500);
                // }
                // a = 1;
                // });
            }




        }
    }

    if (document.querySelector('.header')) {
        const mainNav = document.getElementById("navList");
        const magicLine = document.createElement('li');
        magicLine.classList.add('magic-line');
        mainNav.append(magicLine);
        const magicPointWidth = parseFloat(getComputedStyle(document.querySelector('.magic-line'), null).width.replace("px", ""));
        let activeElement = document.querySelector('#navList .active');
        const navItems = document.querySelectorAll('.header__nav-li');

        for (const navItem of navItems) {
            navItem.addEventListener('mouseenter', () => {
                itemWidth = parseFloat(getComputedStyle(navItem, null).width.replace("px", ""));
                itemLeftPos = navItem.offsetLeft + "px";
                magicLine.style.left = (itemWidth / 2) + navItem.offsetLeft - magicPointWidth / 2 + "px";
            });
        }
    }

    if (document.querySelector('.welcome')) {
        document.getElementById("header").style.display = "none";
    }


}

init();
swup.on('contentReplaced', init);