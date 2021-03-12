const cvform = document.querySelector(".my-cv-form");
const cvid = document.querySelector("#studentid");

cvform.addEventListener("submit", (e) => {
  var firestore = firebase.firestore();
  firestore
    .collection("students")
    .doc(cvid.value)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const writedata = `
<div class="my-student-info">
          <div><i class="fas fa-user-check"></i></div>
          <div>Student Verified</div>
        </div>
        <div class="my-student-info-cert">
          <img src="${doc.data().crtfct}" alt="" />
        </div>
`;
        const studentinfowapper = document.querySelector(
          ".my-student-info-wapper"
        );
        studentinfowapper.innerHTML = writedata;
      } else {
        alert("Please Enter A Valid Student Id");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  e.preventDefault();
});

const mblsubnav = document.querySelector(".my-mbl-sub-nav");
const mblsubnavwapper = document.querySelector(".my-mbl-subnav-wapper");

mblsubnavwapper.addEventListener("click", (e) => {
  if (mblsubnav.classList.contains("show-mbl-subanv")) {
    mblsubnav.classList.remove("show-mbl-subanv");
  } else {
    mblsubnav.classList.add("show-mbl-subanv");
  }
});
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
