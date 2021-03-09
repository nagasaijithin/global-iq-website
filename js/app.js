const btn = document.querySelector(".my-btn");
const inname = document.querySelector("#name");
const inmessage = document.querySelector("#message");
const inphone = document.querySelector("#phone");
const incheckbox = document.querySelector("#checkbox");
btn.addEventListener("click", (e) => {
  if (
    inname.value != "" &&
    inphone.value != "" &&
    inmessage.value != "" &&
    incheckbox.checked != false
  ) {
    let obj = {
      from_name: "Global Iq Website",
      my_name: inname.value,
      my_phone: inphone.value,
      my_message: inmessage.value,
    };
    emailjs.send("service_24nwyab", "template_myg65tl", obj).then(
      function (response) {
        alert("SENT SUCCESS!");
        inname.value = "";
        inphone.value = "";
        inmessage.value = "";
        incheckbox.checked = false;
      },
      function (error) {
        alert("FAILED...");
      }
    );
  } else {
    alert("Please Fill The Form");
  }
  e.preventDefault();
});

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
