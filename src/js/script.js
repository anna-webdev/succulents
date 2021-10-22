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

$(document).ready(function(){ /* конструкцию прописываtim один раз, когда используешь gQ */
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
      autoplay: true,
      autoplaySpeed: 3500,

   });

//Modal
  $('[data-modal=catalog]').on('click', function () {
    $('.overlay, #catalog').fadeIn('slow');
  });
  
  $('.modal__close').on('click', function () {
    $('.overlay, #catalog, #buy_plant, #thanks').fadeOut('slow');
  });

  $('.button_card').each(function(i) {
    $(this).on('click', function() {
      $('#buy_plant .modal__subtitle').text($('.title_card').eq(i).text());
      $('.overlay, #buy_plant').fadeIn('slow');
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Please specify your name",
        phone: "Please, enter your phone number",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
      }
    });
  }
  validateForms('#left');
  validateForms('#catalog form');
  validateForms('#buy_plant form');

  $('input[name=phone]').mask("+7 (999)-999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }
    
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#catalog, #order').fadeOut("slow");
        $('.overlay, #thanks').fadeIn('slow');
        $("form").trigger('reset');
    });
    return false;
});
});




 
