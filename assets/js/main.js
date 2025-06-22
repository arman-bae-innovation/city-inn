
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

// slider-one
$(document).ready(function(){
  $('.slider-one').slick({

    dots: true,
    arrows: true,

    infinite: false,
    speed: 300,

    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: false,
    autoplaySpeed: 2000,

  });
});
// slider-two
$(document).ready(function(){
  $('.slider-two').slick({

    dots: true,
    arrows: true,

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
          arrows: false,
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
    arrows: true,

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
          arrows: false,
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
    arrows: true,

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
          arrows: false,
          slidesToShow: 1,
        }
      }
    ]

  });
});
// slider-hall
$(document).ready(function(){
  $('.slider-hall').slick({

    dots: true,
    arrows: true,

    infinite: false,
    speed: 300,

    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: false,
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
          arrows: false,
          slidesToShow: 1,
        }
      }
    ]

  });
});
// slider-restaurant
$(document).ready(function(){
  $('.slider-restaurant').slick({

    dots: true,
    arrows: true,

    infinite: false,
    speed: 300,

    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: false,
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
          arrows: false,
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


// AUTO TITLE CHANGE GO ANOTHER TAB START

// const originalTitle = document.title;
// document.addEventListener("visibilitychange", function () {
//   if (document.hidden) {
//     document.title = "Come back to City inn Ltd!";
//   } else {
//     document.title = originalTitle;
//   }
// });

// AUTO TITLE CHANGE GO ANOTHER TAB END 




// AUTO TITLE CHANGE GO ANOTHER TAB START

const originalTitle = document.title;
const altTitle1 = "❤ Relax. You deserve it!";
const altTitle2 = "🔥 Ready to explore?";
let toggleInterval;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    let toggle = false;
    toggleInterval = setInterval(() => {
      document.title = toggle ? altTitle1 : altTitle2;
      toggle = !toggle;
    }, 2000);
  } else {
    clearInterval(toggleInterval);
    document.title = originalTitle;
  }
});

// AUTO TITLE CHANGE GO ANOTHER TAB END 