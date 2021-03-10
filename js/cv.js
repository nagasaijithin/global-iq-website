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
