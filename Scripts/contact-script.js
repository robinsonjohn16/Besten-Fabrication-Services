document.getElementById("btn").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const mail = document.querySelector("#mail").value;
  const subject = document.querySelector("#subject").value;
  const msg = document.querySelector("#msg").value;

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
    Email.send({
      SecureToken: "bd14f7e4-1f2d-45d5-b71d-ba224ebbf30d",
      To: "bestenfabrication@gmail.com",
      From: "bestenfabrication@gmail.com",
      Subject: subject,
      Body: finalMsg,
    }).then((message) => alert("Thankyou for connecting with us!!"));
  }
});

const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".dropDown-right");
toggleBtn.onclick = function () {
  dropDowm.classList.toggle("open");
  const isOpen = dropDowm.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
