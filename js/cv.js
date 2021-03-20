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
        <img src="${doc.data().crtfct}" alt="" />
`;
        const studentinfowapper = document.querySelector(".fb-data-img");
        const mystifcet = document.querySelector(".my-student-info-cert");
        const mystif = document.querySelector(".my-student-info");
        studentinfowapper.innerHTML = writedata;
        mystif.classList.remove("hide-s-i");
        mystifcet.classList.remove("hide-s-i");
      } else {
        alert("Please Enter A Valid Student Id");
        const mystifcet = document.querySelector(".my-student-info-cert");
        const mystif = document.querySelector(".my-student-info");
        mystif.classList.add("hide-s-i");
        mystifcet.classList.add("hide-s-i");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  e.preventDefault();
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
