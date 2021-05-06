const form = document.querySelector(".add-student-form");

const studentCtc = document.querySelector(".my-add-student-ctc");
const studentCtclabel = document.querySelector(".my-s-a-f-l");
const studentId = document.querySelector(".my-add-student-id");
const signoutbtn = document.querySelector("#signout");
const auth = firebase.auth();

studentId.addEventListener("keyup", (e) => {
  var phone = `${e.target.value}`;
  phone = phone.replace(/(\w{3})(\d{4})(\d{4})/, "$1-$2-$3");
  e.target.value = phone;
});

signoutbtn.addEventListener("click", (e) => {
  auth.signOut();
  window.location.replace("/public/login.html");
});

studentCtc.addEventListener("change", (e) => {
  e.target.value == ""
    ? (studentCtclabel.innerHTML = "Add Student certication")
    : (studentCtclabel.innerHTML = "Image Added");
});
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    if (!uid) {
      window.location.replace("/public/login.html");
    }
    // ...
  } else {
    // User is signed out
    window.location.replace("/public/login.html");
    // ...
  }
});

const ldwapper = document.querySelector(".ld-wapper");
form.addEventListener("submit", (e) => {
  const fliterid = studentId.value.replace(/[-\s]/g, "");
  if (studentId.value != "" && studentCtc.value != "") {
    ldwapper.classList.add("sh-ld");
    var storageRef = firebase.storage().ref();
    var firestore = firebase.firestore();
    storageRef
      .child("student_ctfct/" + fliterid)
      .put(studentCtc.files[0])
      .then((data) => {
        storageRef
          .child("student_ctfct/" + fliterid)
          .getDownloadURL()
          .then((url) => {
            firestore
              .collection("students")
              .doc(fliterid)
              .set({
                studentid: fliterid,
                crtfct: url,
              })
              .then((err) => {
                alert("Student Add successfully");
                ldwapper.classList.remove("sh-ld");
                studentId.value = "";
                studentCtc.value = "";
                studentCtclabel.innerHTML = "Add Student certication";
              })
              .catch((err) => {
                alert(err);
              });
          });
      });
  } else {
    alert("Please Fill Fhe Form");
  }

  e.preventDefault();
});

const addstudentsWapper = document.querySelector(".my-addstudent-form-wapper");

const addstudentsshowbtn = document.querySelector(".my-add-student-btn");
addstudentsshowbtn.addEventListener("click", (e) => {
  addstudentsWapper.classList.add("my-add-s-show");
});

const closetheaddstudentwapper = document.querySelector(".fa-times");
closetheaddstudentwapper.addEventListener("click", (e) => {
  addstudentsWapper.classList.remove("my-add-s-show");
});

var dataroot = false;
var firestore = firebase.firestore();
firestore
  .collection("students")
  .get()
  .then((querySnapshot) => {
    var maincontent = "";
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      maincontent += `
      <tr data-id=${
        doc.data().studentid
      } class="student-data-wapper border-b hover:bg-orange-100 bg-gray-100">
      <td class="p-3 px-5">
      <h1>${doc.data().studentid}</h1>
      </td>
      <td class="p-3 px-5">
      <h1>${doc.data().crtfct == "" ? "false" : "true"}</h1>
      </td>
      
                      <td class="p-3 px-5 flex justify-end">
                        <button
                        type="button"
                          class="my-data-btn text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                          Delete
                          </button>
                          </td>
                          </tr>
                          `;
    });
    return maincontent;
  })
  .then((data) => {
    const allstudentdatawapper = document.querySelector(".all-student-data");
    allstudentdatawapper.innerHTML = data;
    dataroot = true;
    deletewapper();
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

function deletewapper() {
  if (dataroot) {
    const databtn = document.querySelectorAll(".my-data-btn");
    databtn.forEach((data) => {
      data.addEventListener("click", (e) => {
        firestore
          .collection("students")
          .doc(e.target.parentElement.parentElement.dataset.id)
          .delete()
          .then(() => {
            e.target.parentElement.parentElement.style.display = "none";
            //image delete next
            alert("Document successfully deleted!");
          })
          .catch((error) => {
            alert("Error removing document: ", error);
          });
      });
    });
  }
}
