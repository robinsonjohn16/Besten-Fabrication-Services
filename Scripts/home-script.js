const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  // effect: "fade",
  speed: 400,
  spaceBetween: 50,
  autoHeight: true,
  breakpoints: {
    300: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 50,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  lazyLoading: true,
});

const swiper1 = new Swiper(".swiper1", {
  slidesPerView: 1,
  // effect: "cube",
  // loop: "true",
  speed: 400,
  spaceBetween: 50,
  autoHeight: true,
  centeredSlides: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    800: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  lazyLoading: true,
});

const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".dropDown-right");
toggleBtn.onclick = function () {
  dropDowm.classList.toggle("open");
  const isOpen = dropDowm.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
