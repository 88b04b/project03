$(function () {
    $('.top_banner_close').on('click', function () {
        $('.top_banner').slideUp();
        $('.header').toggleClass('top_banner_active');
        $('.main_visual').toggleClass('top_banner_active');
    });

    // $('.gallery_slide').slick({
    //     autoplay: true,
    //     arrows: true,
    //     dots: true,
    // });

    // $('.gallery .arrows .left').on('click', function () {
    //     $('.gallery_slide').slick('slickPrev');
    // });
    // $('.gallery .arrows .right').on('click', function () {
    //     $('.gallery_slide').slick('slickNext');
    // });

    var swiper = new Swiper(".gallery_slide", {
        navigation: {
            nextEl: ".gallery_slide_next",
            prevEl: ".gallery_slide_prev",
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        // },
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        spaceBetween: 30,
        loop: true,
    });

});