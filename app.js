import './scripts/neumorphism.js';
import 'owl.carousel';
import 'bootstrap';
import PerfectScrollbar from 'perfect-scrollbar';
import AOS from 'aos';
AOS.init({
    duration: 700,
    // easing: 'cubic-bezier(.91, .11, .19, .92)'
});

const ps = new PerfectScrollbar('#container');


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