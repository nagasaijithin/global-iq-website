const fristname = document.querySelector(".my-first-name");
const lastname = document.querySelector(".my-last-name");
const selectedcourse = document.querySelector(".my-select-course");
const phonenumber = document.querySelector(".my-phone-number");
const email = document.querySelector(".my-email");
const address = document.querySelector(".my-address");

const form = document.querySelector(".my-form");

form.addEventListener("submit", (e) => {
  const db = firebase.firestore();
  db.collection("studentregistration")
    .doc()
    .set({
      fristname: fristname.value,
      lastname: lastname.value,
      selectedcourse: selectedcourse.value,
      phonenumber: phonenumber.value,
      email: email.value,
      address: address.value,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  e.preventDefault();
});
