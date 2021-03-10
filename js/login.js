const form = document.querySelector(".my-login-form");
const email = document.querySelector(".my-login-email");
const password = document.querySelector(".my-login-pass");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid);
    uid && window.location.replace("/public/dasbord.html");
    // ...
  } else {
    // User is signed out
    // ...
  }
});

form.addEventListener("submit", (e) => {
  console.log(email.value);
  console.log(password.value);
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.replace("/public/dasbord.html");

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  e.preventDefault();
});
