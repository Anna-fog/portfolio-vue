'use strict'

window.addEventListener('DOMContentLoaded', () => {

    // side menu

    const burger = document.querySelector('.burger'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close'),
          overlay = document.querySelector('.menu__overlay');


    burger.addEventListener('click', () => {
        menu.classList.add('active');
    });


    // close menu

    function menuClose() {
        menu.classList.remove('active');
    }

    closeElem.addEventListener('click', () => {
        menuClose();
    });

    overlay.addEventListener('click', () => {
        menuClose();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menuClose();
        }
    });

    const links = document.querySelectorAll('.menu__link a');

    links.forEach(item => {
        item.addEventListener('click', () => {
            menuClose();
        });
    });


    // percentages

    const percentages = document.querySelectorAll('.skills__number'),
            lines = document.querySelectorAll('.skills__line_pecr');

    percentages.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });


    // pageup & smooth scroll

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 1600) {
    //         $('.pageup').fadeIn();
    //     } else {
    //         $('.pageup').fadeOut();
    //     }
    // });
    //
    // $('a[href^="#"]').on('click', function() {
    //     let href = $(this).attr('href');
    //     $('html, body').animate({
    //         scrollTop: $(href).offset().top
    //     }, 400);
    //     return false;
    // });


    // wow animation

    new WOW().init();


    // sending form

    // const ufo = document.querySelector('#sent');

    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         $(this).find('input', 'textarea').val('');
    //         ufo.classList.add('animated', 'fadeInUp');
    //         ufo.style.display = 'block';
    //         setTimeout(() => {
    //             ufo.classList.add('fadeOutUp');
    //         }, 2000);
    //         setTimeout(() => {
    //             ufo.style.display = 'none';
    //             ufo.classList.remove('fadeOutUp')
    //         }, 5000);
    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });


    // mousemove circles

    const mouseMove = function() {
        if(window.screen.width > 990) {
            let circleSmall = document.querySelector('.circle-small');
            let circleMiddle = document.querySelector('.circle-middle');
            let circleLarge = document.querySelector('.circle-large');
            let circleImg = document.querySelector('.circle-img');

            window.addEventListener('mousemove', function(e) {
                let x = e.clientX / window.innerWidth;
                let y = e.clientY / window.innerHeight;
                circleMiddle.style.transform = 'translate(-' + x * 30 + 'px, ' + y * 70 + 'px)';
                circleLarge.style.transform = 'translate(' + x * 90 + 'px, ' + y * 50 + 'px)';
                circleImg.style.transform = 'translate(' + x * 100 + 'px, -' + y * 70 + 'px)';
                circleSmall.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,' + (-x * 25) + ',' + (-y * 50) + ', 0, 1)';
            });
        }
    };
    mouseMove();


    // add filter to photo by click

    const photo = document.querySelector('.about__photo > img');
    const promoBg = document.querySelector('.promo');

    photo.addEventListener('click', () => {
        photo.classList.toggle('invert-filter');
        promoBg.classList.toggle('promo-filter');
    });

});


