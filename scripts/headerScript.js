function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (window.pageYOffset > 36) {
            $('.header .container-fluid').addClass('scrolled');

            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.top = "16px";
            } else {
                document.getElementById("header").style.top = "-145px";
            }
            prevScrollpos = currentScrollPos;
        } else {
            $('.header .container-fluid').removeClass('scrolled');
        }
    }
}

const headerMoveLinks = () => {
    if (window.innerWidth >= 992) {
        document.querySelector('.header .container-fluid').append(document.querySelector('.header__nav-right'));
    } else {
        document.querySelector('.header__nav').append(document.querySelector('.header__nav-right'));
    }
    // console.log("links moved");
}

window.addEventListener('resize', headerMoveLinks);

$(function () {

    // $("a[href*='#']:not([href='#]), a[href="*"] ").click(function () {
    //     let target = $(this).attr("href");
    //     $('html,body').stop().animate({
    //         scrollTop: $(target).offset().top - 10
    //     }, 1000);
    //     event.preventDefault();


    //     // $('.header__nav').removeClass('header__nav--entered');
    //     // $('.nav-toggle').removeClass('nav-toggle--entered');
    //     // $('body').removeClass('stop-scrolling');

    //     // if ($('body').hasClass('stop-scrolling') == false) {
    //     //     $('body').unbind('touchmove')
    //     // }
    // });



    $('a[href^="#"]').click(function () {

        document.getElementById("header").style.top = "16px";

    });

    // $(window).bind('scroll', function () {
    //     var currentTop = $(window).scrollTop();
    //     var elems = $('.scrollspy');
    //     elems.each(function (index) {
    //         var elemTop = $(this).offset().top - 10;
    //         var elemBottom = elemTop + $(this).height();
    //         if (currentTop >= elemTop && currentTop <= elemBottom) {
    //             var id = $(this).attr('id');
    //             var navElem = $('a[href="#' + id + '"]');
    //             navElem.addClass('active').siblings().removeClass('active');
    //         }
    //     })
    // });
    //zaznacznaie na kolor

    $('.header__logo').click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);
    })

    $('.nav-toggle').click(function () {
        $('.header__nav').toggleClass('header__nav--entered');
        $('.nav-toggle').toggleClass('nav-toggle--entered');
        $('body').toggleClass('stop-scrolling');
        if ($('body').hasClass('stop-scrolling') == false) {
            $('body').unbind('touchmove')
        } else {
            $('body').bind('touchmove', function (e) {
                e.preventDefault()
            })
        }
    });


    headerOnScroll();
    headerMoveLinks();
});