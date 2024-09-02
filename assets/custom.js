$(document).ready(function () {
  AOS.init({
    duration: 700, // values from 0 to 3000, with step 50ms
    once: true,
    startEvent: "DOMContentLoaded",
    offset: 50,
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
});
