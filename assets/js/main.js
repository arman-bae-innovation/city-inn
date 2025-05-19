
document.addEventListener('DOMContentLoaded', function () {

  // TOOLTIP START 
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
  // TOOLTIP END 

  // NAV MENU TOGGOLER START 
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarIcon = document.getElementById('navbar-icon');
  navbarToggler.addEventListener('click', function() {
    navbarIcon.classList.toggle('bi-list');
    navbarIcon.classList.toggle('bi-x-lg');
  });
  // NAV MENU TOGGOLER END

});

// SLICK SLIDER START --------

// slider-two
$(document).ready(function(){
  $('.slider-two').slick({

    dots: true,
    arrows: false,

    infinite: false,
    speed: 300,

    slidesToShow: 2,
    slidesToScroll: 1,

    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });
});
// slider-three
$(document).ready(function(){
  $('.slider-three').slick({

    dots: true,
    arrows: false,

    infinite: false,
    speed: 300,

    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });
});
// slider-four
$(document).ready(function(){
  $('.slider-four').slick({

    dots: true,
    arrows: false,

    infinite: true,
    speed: 300,

    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });
});

// SLICK SLIDER END ---------


// Time-Based Theme Switch START 
function updateThemeByTime() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const darkModeEnd = 6 * 60 + 0;
  const darkModeStart = 19 * 60 + 0;
  const isDarkTime = currentMinutes >= darkModeStart || currentMinutes < darkModeEnd;
  document.documentElement.classList.toggle('dark-mode', isDarkTime);
}
updateThemeByTime();
setInterval(updateThemeByTime, 1000);
// Time-Based Theme Switch END 


