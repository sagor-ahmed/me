(function($) {

    ////////////////////////////////////////////////////

    // . Data-Background Js

    $("[data-background").each(function() {

        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");

    });


    ////////////////////////////////////////////////////

    //  Testimonial Slider Js

    $('.testimonial-slider').owlCarousel({

        loop: true,

        margin: 30,

        autoplay: false,


        /* smartSpeed: 500,*/

        items: 1,

        dots: true,

        /*	navText:['<span>','<span/>'],*/

        nav: false,



        responsive: {

            0: {

                items: 1,

            },

            767: {

                items: 2

            },

            992: {

                items: 2

            },

            1200: {

                items: 2

            }

        }

    });
    /*MIXIT UP PLUGIN*/
    var containerEl = document.querySelector('.mix_container');
    var mixer = mixitup(containerEl, {
        selectors: {
            control: '[our-mixitup-control]'
        }
    });
    /*MIXIT UP PLUGIN*/

    ////////////////////////////////////////////////////

    //  About wf Js

    $(".about-w-f").owlCarousel({

        loop: true,


        autoplay: false,

        /* smartSpeed: 500,*/

        items: 1,

        dots: false,

        /*	navText:['<span>','<span/>'],*/

        nav: false,



        responsive: {

            0: {

                items: 1

            },

            767: {

                items: 1

            },

            992: {

                items: 1

            },

            1200: {

                items: 1

            }
        }
    });


    ////////////////////////////////////////////////////

    // 02. Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function(event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function(event) {

        if ($(this).scrollTop() > 600) {

            $('.scroll-up').fadeIn(200)

        } else {

            $('.scroll-up').fadeOut(200)

        }

    });



    //Animate the scroll to yop

    $('.scroll-up').on('click', function(event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });

    ////////////////////////////////////////////////////

    //  Counterup Js

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



})(jQuery);




const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


