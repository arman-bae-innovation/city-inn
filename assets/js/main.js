
// tooltip
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
});

// SLICK SLIDER START

// slider-three
$(document).ready(function(){
  $('.slider-three').slick({

    dots: true,
    arrows: false,

    infinite: true,
    speed: 300,

    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
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
// SLICK SLIDER END 