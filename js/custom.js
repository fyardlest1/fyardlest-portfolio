jQuery(document).ready(function($) {

    // Whole Script Strict Mode Syntax
    "use strict";

    //Portfolio Tab JS

    $('.portfolio-items').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('.portfolio-tab ul li').on('click', function() {
        $('.portfolio-tab ul li').removeClass('portfolio-active-tab');
        $(this).addClass('portfolio-active-tab');

        var selector = $(this).attr('data-filter');
        $('.portfolio-items').isotope({
            filter: selector
        });
        return false;
    });


    //Circle Chart JS

    $('.circlechart').circlechart();


    //Progress Bar JS

    $(".progress-bar").ProgressBar();


    //WOW Animation JS

    new WOW().init();


    //Testimonial Slider JS

    var swiper = new Swiper('.testimonial-slider', {
        // Optional parameters
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },

        breakpoints: {
            "991": {
                slidesPerView: 1,
            },
        },
    });


    //Scroll To Top JS

    jQuery('#scrollToTop').on('click', function() {
        jQuery("html, body").animate({ scrollTop: 0 }, 100);
        return false;
    });


    //Sticky Header JS

    jQuery(window).on('scroll', function() { // this will work when your window scrolled.
        var height = jQuery(window).scrollTop(); //getting the scrolling height of window
        if (height > 20) {
            jQuery(".site-header").addClass("sticky_head");
        } else {
            jQuery(".site-header").removeClass("sticky_head");
        }
    });


    //Mobile Menu JS

    $(".menu-toggle").on('click', function() {
        $(".header-right-wrapper").toggleClass("toggled");
    });


    //Color Choose JS

    $(".choose-color-btn button").on('click', function() {
        $(".choose-color-wp").toggleClass("color-toggled");
    });

    $(".choose-color-box li").on('click', function() {
        $(".choose-color-box li").removeClass('active-color');
        $(this).addClass('active-color');
        var color_class = $(this).attr('data-color_class');
        $('body').removeClass();
        $('body').addClass(color_class);
    });

    var sections = $('section'),
        nav = $('header'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('nav a').on('click', function() {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - 20
        }, 500);

        return false;
    });

});