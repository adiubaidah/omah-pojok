$(document).ready(function () {
  AOS.init({
    duration: 700, // values from 0 to 3000, with step 50ms
    once: true,
    startEvent: "DOMContentLoaded",
    offset: 50,
  });

  $('#read-more-btn').click(function() {
    $('#more-text').slideDown();
    $('#more-text-2').slideDown();
    $('#read-more-btn').hide();
    $('#read-less-btn').show();
  });

  $('#read-less-btn').click(function() {
    $('#more-text').slideUp();
    $('#more-text-2').slideUp();
    $('#read-more-btn').show();
    $('#read-less-btn').hide();
  });
  
  window.addEventListener("scroll", function () {
    const navbar = $(".navbar");
    if (window.scrollY > 100) {
      navbar.addClass("fixed");
    } else {
      navbar.removeClass("fixed");
    }
  });

  const filters = new Muuri(".items", {
    items: ".item",
  });

  const buttonFilters = $(".filters button");
  buttonFilters.each(function () {
    $(this).on("click", function () {
      buttonFilters.removeClass("active");
      $(this).addClass("active");

      const category = $(this).data("filter");
      if (category === "semua") {
        filters.filter("[data-category]");
      } else {
        filters.filter(`[data-category="${category}"]`);
      }
    });
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1, // Default value
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
      },
    },
  });

  const accordionButtons = $('.accordion-button');

  accordionButtons.each(function () {
    $(this).on('click', function () {

      if ($(this).hasClass('collapsed')) {
        console.log('test')
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    });
  });
});


const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar'
})
