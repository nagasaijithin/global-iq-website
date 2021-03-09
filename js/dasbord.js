const form = document.querySelector(".add-student-form");

const studentCtc = document.querySelector(".my-add-student-ctc");
const studentId = document.querySelector(".my-add-student-id");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    uid && window.location.replace("http://localhost:1234/");
    // ...
  }
});
