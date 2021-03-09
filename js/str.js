import "../scss/str.scss";

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
    .doc(email.value)
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

const printbtn = document.querySelector(".print-btn");
printbtn.addEventListener("click", () => {
  const content = `
<form class="my-form form bg-white p-6 m-10 relative">
      <h3 class="text-2xl text-gray-900 font-semibold">Let us call you!</h3>
      <p class="text-gray-600">To help you choose your property</p>
      <div class="flex space-x-5 mt-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="${fristname.value}"
          class="my-first-name border p-2 w-1/2"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="${lastname.value}"
          class="my-last-name border p-2 w-1/2"
        />
      </div>

      <div class="space-x-5 mt-5">
        <select
          class="my-select-course try-pass w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value="${selectedcourse.value}" selected="selected">${selectedcourse.value}</option>
        </select>
      </div>

      <div class="flex space-x-5 mt-5">
        <input
          type="E-mail"
          name=""
          id=""
          placeholder="${email.value}"
          class="my-email border p-2 w-1/2"
        />
        <input
          type="tel"
          name=""
          id=""
          placeholder="${phonenumber.value}"
          class="my-phone-number border p-2 w-1/2"
        />
      </div>

      <textarea
        name=""
        id=""
        cols="10"
        rows="3"
        placeholder="${address.value}"
        class="my-address border p-2 mt-3 w-full"
      ></textarea>
    </form>
`;

  var originalContents = document.body.innerHTML;

  document.body.innerHTML = content;

  window.print();

  document.body.innerHTML = originalContents;
});
