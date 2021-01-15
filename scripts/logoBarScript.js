function logoBarDimensions() {
    if (typeof (document.querySelector('.welcome')) != 'undefined' && document.querySelector('.welcome') != null) {
        let logoBarWidth = document.querySelector('.welcome__logo-bar').getBoundingClientRect().width / 2;
        let logoBarHeight = document.querySelector('.welcome__logo-bar').getBoundingClientRect().height;
        $('.welcome__logo-bar-helper').css('width', logoBarWidth + 'px');
        $('.welcome__logo-bar-helper').css('height', logoBarHeight + 'px');
    }
}
$(function () {
    logoBarDimensions();
});

$(window).resize(function () {
    logoBarDimensions();
    ps.update();

});