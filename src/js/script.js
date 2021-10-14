window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('promo__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('promo__menu_active');
        });
    });
});

$(document).ready(function(){
    $('.interier__carousel').slick({
            centerMode: true,
            arrows: false,
            dots: true,
            centerPadding: '20px',
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '20px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '20px',
                  slidesToShow: 1
                }
              }
            ]
          }
    );
  });