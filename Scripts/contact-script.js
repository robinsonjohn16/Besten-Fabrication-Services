document.getElementById("btn").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const mail = document.querySelector("#mail").value;
  const subject = document.querySelector("#subject").value;
  const msg = document.querySelector("#msg").value;

  const finalMsg = `Name : ${name}, Email ${mail} and msg ${msg}`;
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
    //  .catch(() =>
    //    alert(
    //      "Sorry the Quote System is not working at this moment, You can contact us through the Contact number mentioned below "
    //    )
    //  );
  }
});
