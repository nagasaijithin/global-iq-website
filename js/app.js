const btn = document.querySelector(".my-btn");
const inname = document.querySelector("#name");
const inmessage = document.querySelector("#message");
const inphone = document.querySelector("#phone");
const incheckbox = document.querySelector("#checkbox");

const btn1 = document.querySelector(".my-btn1");
const inname1 = document.querySelector("#name1");
const inmessage1 = document.querySelector("#message1");
const inphone1 = document.querySelector("#phone1");
const incheckbox1 = document.querySelector("#checkbox1");

const mblconbtn = document.querySelector(".mbl-con-btn");
const mblcontformwapper = document.querySelector(".mbl-contact-form-content");
mblconbtn.addEventListener("click", (e) => {
  if (mblcontformwapper.classList.contains("mbl-con-form-content-wapper")) {
    mblcontformwapper.classList.remove("mbl-con-form-content-wapper");
  } else {
    mblcontformwapper.classList.add("mbl-con-form-content-wapper");
  }
});
// const mblsubnav = document.querySelector(".my-mbl-sub-nav");
// const mblsubnavwapper = document.querySelector(".my-mbl-subnav-wapper");

// mblsubnavwapper.addEventListener("click", (e) => {
//   if (mblsubnav.classList.contains("show-mbl-subanv")) {
//     mblsubnav.classList.remove("show-mbl-subanv");
//   } else {
//     mblsubnav.classList.add("show-mbl-subanv");
//   }
// });
const mblnavlinkwapper = document.querySelector(".mbl-navlink-wapper");
const mblnavicon = document.querySelector(".mbl-nav");
mblnavicon.addEventListener("click", (e) => {
  mblnavlinkwapper.style.display = "block";
});
const mblnavcloseicon = document.querySelector(".close-mbl-nav");
mblnavcloseicon.addEventListener("click", (e) => {
  mblnavlinkwapper.style.display = "none";
});

let mbleAlllink = document.querySelectorAll(".mbl-navlink-wapper ul li a");

mbleAlllink.forEach((each) => {
  each.addEventListener("click", () => {
    mblnavlinkwapper.style.display = "none";
  });
});

btn1.addEventListener("click", (e) => {
  if (
    inname1.value != "" &&
    inphone1.value != "" &&
    inmessage1.value != "" &&
    incheckbox1.checked != false
  ) {
    let obj = {
      from_name: "Global Iq Website",
      my_name: inname1.value,
      my_phone: inphone1.value,
      my_message: inmessage1.value,
    };
    emailjs.send("service_24nwyab", "template_myg65tl", obj).then(
      function (response) {
        alert("SENT SUCCESS!");
        inname1.value = "";
        inphone1.value = "";
        inmessage1.value = "";
        incheckbox1.checked = false;
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
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

const scrollTopBtn = document.querySelector(".scroll-top-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.classList.add("slide-in");
  } else {
    scrollTopBtn.classList.remove("slide-in");
  }
}

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const mycouresbtn = document.querySelectorAll(".my-cu-btns-wapper button");
mycouresbtn.forEach((each) => {
  each.addEventListener("click", (e) => {
    mycouresbtn.forEach((eachE) => {
      eachE.classList.remove("my-clicked-btn");
    });
    e.target.classList.add("my-clicked-btn");
    console.log(e.target.dataset.id);
    // if (e.target.dataset.id == 1) {
    //   show1stdata();
    // } else if (e.target.dataset.id == 2) {
    //   show2stdata();
    // } else if (e.target.dataset.id == 3) {
    //   show3stdata();
    // }
    e.preventDefault();
  });
});
// const coursewapper = document.querySelector(".my-course-grid");

// function show1stdata() {
//   coursewapper.innerHTML = content;
// }
// function show2stdata() {
//   coursewapper.innerHTML = content;
// }
// function show3stdata() {
//   coursewapper.innerHTML = content;
// }

// show3stdata();
