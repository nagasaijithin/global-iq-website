const fristname = document.querySelector(".my-first-name");
const lastname = document.querySelector(".my-last-name");
const selectedcourse = document.querySelector(".my-select-course");
const phonenumber = document.querySelector(".my-phone-number");
const email = document.querySelector(".my-email");
const address = document.querySelector(".my-address");

const form = document.querySelector(".my-form");

function sendmail() {
  if (
    fristname.value != "" &&
    lastname.value != "" &&
    selectedcourse.value != "" &&
    phonenumber.value != "" &&
    email.value != "" &&
    address.value != ""
  ) {
    const obj = {
      from_name: "Global Iq Website",
      st_fristname: fristname.value,
      st_lastname: lastname.value,
      st_selectedcourse: selectedcourse.value,
      st_phone: phonenumber.value,
      st_email: email.value,
      st_address: address.value,
    };
    emailjs.send("service_24nwyab", "template_tuqbo3m", obj).then(
      function (response) {
        alert("SENT SUCCESS!");
        inname.value = "";
        inphone.value = "";
        inmessage.value = "";
        incheckbox.checked = false;
      },
      function (error) {
        alert("FAILED...");
      }
    );
  } else {
    alert("Please Fill The Form");
  }
}

form.addEventListener("submit", (e) => {
  sendmail();
  e.preventDefault();
});

const printbtn = document.querySelector(".print-btn");
printbtn.addEventListener("click", () => {
  const content = `
<form class="my-form form bg-white p-6 m-10 relative">
      <h3 class="text-2xl text-gray-900 font-semibold">Student Registration</h3>
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
  sendmail();
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = content;

  window.print();

  document.body.innerHTML = originalContents;
});
