const swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1.99,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 50,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 1.99,
      spaceBetween: 50,
    },
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

const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".dropDown-right");
toggleBtn.onclick = function () {
  dropDowm.classList.toggle("open");
  const isOpen = dropDowm.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
