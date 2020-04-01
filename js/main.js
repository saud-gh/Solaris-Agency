$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    autoHeight: true,
    dots: false,
    nav: true,
    navText: [
      "<button class='nav-btn prev-slide bg-secondary'><i class='material-icons text-white'>chevron_left</i></button>",
      "<button class='nav-btn next-slide bg-secondary'><i class='material-icons text-white'>chevron_right</i></button>"
    ],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  const navLinks = $(".nav-links");
  const navbarToggle = $(".navbar-toggle");

  navbarToggle.click(() => {
    navLinks.toggleClass("active");
  });
});