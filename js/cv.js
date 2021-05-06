const cvform = document.querySelector(".my-cv-form");
const cvid = document.querySelector("#studentid");
cvid.addEventListener("keyup", (e) => {
  var phone = `${e.target.value}`;
  phone = phone.replace(/(\w{3})(\d{4})(\d{4})/, "$1-$2-$3");
  e.target.value = phone;
});
cvform.addEventListener("submit", (e) => {
  const filterid = cvid.value.replace(/[-\s]/g, "");
  var firestore = firebase.firestore();
  firestore
    .collection("students")
    .doc(filterid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const writedata = `
          <img src="${doc.data().crtfct}" alt="" />
  `;
        const studentinfowapper = document.querySelector(".fb-data-img");
        const mystifcet = document.querySelector(".my-student-info-cert");
        const mystif = document.querySelector(".my-student-info");
        const printbtnh = document.querySelector(".printbtn");
        studentinfowapper.innerHTML = writedata;
        mystif.classList.remove("hide-s-i");
        mystifcet.classList.remove("hide-s-i");
        printbtnh.classList.remove("hide-s-i");
      } else {
        alert("Please Enter A Valid Student Id");
        const mystifcet = document.querySelector(".my-student-info-cert");
        const mystif = document.querySelector(".my-student-info");
        const printbtnh = document.querySelector(".printbtn");
        mystif.classList.add("hide-s-i");
        mystifcet.classList.add("hide-s-i");
        printbtnh.classList.add("hide-s-i");
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

let printbtn = document.querySelector(".printbtn button");

printbtn.addEventListener("click", (e) => {
  let crtimg = document.querySelector(".fb-data-img img");
  const content = `
  <div>
  <img src="${crtimg.src}"/>
  </div>
  `;
  var a = window.open("", "", "height=1200, width=640");
  a.document.write("<html>");
  a.document.write(
    `<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>`
  );
  a.document.write("<body >");
  a.document.write(content);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
});
