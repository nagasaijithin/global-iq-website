import "../scss/style.scss";
console.log("hello");
const btn = document.querySelector(".btn2");
const db = firebase.firestore();
btn.addEventListener("click", (e) => {
  // db.collection("students")
  //   .doc()
  //   .set({
  //     name: "naga saijithin 2",
  //     state: "AP",
  //     country: "IND",
  //   })
  //   .then(() => {
  //     console.log("Document successfully written!");
  //   })
  //   .catch((error) => {
  //     console.error("Error writing document: ", error);
  //   });
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
