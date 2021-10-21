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
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
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
    });

    $('.promo__carousel').slick({
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: `<button type="button" class="slick-next"><img src="../icons/promo_next_arrow.svg" alt="next"></button>`,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      /* autoplay: true, */
      autoplaySpeed: 3500,

    });
  });