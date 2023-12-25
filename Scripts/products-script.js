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

function checkMail(mail) {
  if (mail.includes("@")) {
    return true;
  } else {
    alert("Please provide a valid Email-id!");
    return false;
  }
}
const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".dropDown-right");
toggleBtn.onclick = function () {
  dropDowm.classList.toggle("open");
  const isOpen = dropDowm.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.getElementById("btn").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const mail = document.querySelector("#mail").value;
  const subject = document.querySelector("#subject").value;
  const msg = document.querySelector("#msg").value;

  const formElement = document.querySelector("form");
  const finalMsg = `Name : ${name}\n, Email ${mail} \n Message ${msg}`;
  if (!name) {
    alert("Please enter a valid Name!");
  } else if (!mail) {
    alert("Please enter a valid Email!");
  } else if (!subject) {
    alert("Please enter a valid Subject!");
  } else if (!msg) {
    alert("Please mention your detailed Quote!");
  } else {
    if (checkMail(mail)) {
      Email.send({
        SecureToken: "bd14f7e4-1f2d-45d5-b71d-ba224ebbf30d",
        To: "bestenfabrication@gmail.com",
        From: "bestenfabrication@gmail.com",
        Subject: subject,
        Body: finalMsg,
      }).then((message) => alert("Thankyou for connecting with us!!"));
      formElement.reset();
    }
  }
});
