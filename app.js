// import './scripts/neumorphism.js';
import 'owl.carousel';
import 'jquery-mousewheel';
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

$(window).resize(function () {
    ps.update();
});

function owlCarousels() {

    const workCarousel = $('.work__carousel');

    workCarousel.owlCarousel({
        loop: false,
        autoplay: true,
        lazyLoad: true,
        items: 4,
        margin: 0,
        center: true,
        nav: false,
        autoWidth: true,
        autoplayHoverPause: true,
        dots: false,
        responsiveClass: true,
        // autoplaySpeed: 3000,
        // autoplayTimeout: 5000,
        autoplay: false,
        // stagePadding: 150
    });

    workCarousel.on('mousewheel', '.owl-stage', function (e) {
        // console.log('here1');
        if (e.originalEvent.wheelDelta < 0) {
            // if (e.deltaX < 0) {
            workCarousel.trigger('next.owl');
            // console.log('here2');
        } else {
            workCarousel.trigger('prev.owl');
            // console.log('here3');
        }
        e.preventDefault();
    });
}

function init() {
    if (document.querySelector('.about')) {

        owlCarousels();
        if (window.innerWidth > 992) {
            if (typeof (document.querySelector('.about')) != 'undefined' && document.querySelector('.about') != null) {
                // console.log('inner about');
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

            const hoverPlusLinks = document.querySelectorAll('.hoverPlus');
            Array.from(hoverPlusLinks).forEach(element => {
                // console.log("test");
                element.onmouseenter = el => {
                    cursor.style.width = '36px';
                    cursor.style.height = '36px';
                    document.querySelector('.cursor__plus').style.transform = "scale(1)";
                }
                element.onmouseleave = el => {
                    cursor.style.width = '18px';
                    cursor.style.height = '18px';
                    document.querySelector('.cursor__plus').style.transform = "scale(0)";
                }
            });

            const hoverPortfolio = document.querySelector('.work__carousel');
            hoverPortfolio.onmouseenter = el => {
                cursor.style.width = '42px';
                cursor.style.height = '42px';
                cursor.style.background = "white";
                document.querySelector('.cursor__resize').style.transform = "scale(1)";
            }
            hoverPortfolio.onmouseleave = el => {
                cursor.style.width = '18px';
                cursor.style.height = '18px';
                cursor.style.background = "rgba(61, 95, 124, 0.2)";
                document.querySelector('.cursor__resize').style.transform = "scale(0)";
            }

            let cursor = document.querySelector('.cursor');
            let idle;
            let x, y;
            document.onmousemove = e => {
                x = e.clientX;
                y = e.clientY;

                cursor.style.opacity = 1;
                clearInterval(idle);

                idle = setTimeout(function () {
                    cursor.style.opacity = 0;
                }, 3000);

                cursor.style.top = '0';
                cursor.style.left = '0';
                cursor.style.transform = `translateX(calc(${x}px - 50% + 24px)) translateY(calc(${y}px - 50%  + 24px))`;
            };


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