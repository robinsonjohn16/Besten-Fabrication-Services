const questions_div = document.querySelectorAll(".q");

questions_div.forEach((q) => {
  const trg = q.querySelector(".trg");
  const answer = q.querySelector(".answer");

  q.addEventListener("click", () => {
    //     trg.classList.toggle("active");
    //     answer.classList.toggle("active");
    if (trg.classList.contains("active")) {
      trg.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      trg.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".dropDown-right");
toggleBtn.onclick = function () {
  dropDowm.classList.toggle("open");
  const isOpen = dropDowm.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
