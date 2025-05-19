
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

// SLICK SLIDER START

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

// SLICK SLIDER END 




// LIVE CLOCK START


// function updateClock() {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   const ampm = hours >= 12 ? 'PM' : 'AM';
//   const hour12 = hours % 12 || 12;

//   const paddedMinutes = minutes.toString().padStart(2, '0');
//   const paddedSeconds = seconds.toString().padStart(2, '0');
  
//   const timeString = `${hour12}:${paddedMinutes}:${paddedSeconds} ${ampm}`;
//   document.getElementById('live-clock').textContent = timeString;
// }
// setInterval(updateClock, 1000);
// updateClock();


// LIVE CLOCK END


// AUTO THEME CHANGE FOR TIME START 


// function autoThemeSwitch() {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   const icon = document.getElementById("themeIcon");
//   const isDark = document.body.classList.contains("dark-mode");

//   const currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

//   if (currentTime === "6:00:00" && isDark) {
//     document.body.classList.remove("dark-mode");
//     icon.classList.remove("bi-brightness-high-fill");
//     icon.classList.add("bi-moon-stars-fill");
//     localStorage.setItem("PageTheme", JSON.stringify("LIGHT"));
//     console.log("Switched to LIGHT theme");
//   }

//   if (currentTime === "11:20:00" && !isDark) {
//     document.body.classList.add("dark-mode");
//     icon.classList.remove("bi-moon-stars-fill");
//     icon.classList.add("bi-brightness-high-fill");
//     localStorage.setItem("PageTheme", JSON.stringify("DARK"));
//     console.log("Switched to DARK theme");
//   }
// }

// setInterval(() => {
//   updateClock();
//   autoThemeSwitch();
// }, 1000);


// AUTO THEME CHANGE FOR TIME END 

function autoThemeSwitch() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const icon = document.getElementById("themeIcon");
  const isDark = document.body.classList.contains("dark-mode");

  const currentTime = `${hours}:${minutes}`;

  if (currentTime === "6:0" && isDark) {
    document.body.classList.remove("dark-mode");
    icon.classList.remove("bi-brightness-high-fill");
    icon.classList.add("bi-moon-stars-fill");
    localStorage.setItem("PageTheme", JSON.stringify("LIGHT"));
    console.log("Switched to LIGHT theme");
  }

  if (currentTime === "11:28" && !isDark) {
    document.body.classList.add("dark-mode");
    icon.classList.remove("bi-moon-stars-fill");
    icon.classList.add("bi-brightness-high-fill");
    localStorage.setItem("PageTheme", JSON.stringify("DARK"));
    console.log("Switched to DARK theme");
  }
}
setInterval(() => {
  autoThemeSwitch();
}, 1000);