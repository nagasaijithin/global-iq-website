const fristname = document.querySelector(".my-first-name");
const lastname = document.querySelector(".my-last-name");
const selectedcourse = document.querySelector(".my-select-course");
const phonenumber = document.querySelector(".my-phone-number");
const email = document.querySelector(".my-email");
const address = document.querySelector(".my-address");

const form = document.querySelector(".my-form");

const regsnwapper = document.querySelector(".my-regsn");
regsnwapper.addEventListener("keyup", (e) => {
  var phone = `${e.target.value}`;
  phone = phone.replace(/(\w{3})(\d{4})(\d+)/, "$1-$2-$3");
  e.target.value = phone;
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

function sendmail() {
  if (
    fristname.value != "" &&
    lastname.value != "" &&
    selectedcourse.value != "" &&
    phonenumber.value != "" &&
    email.value != "" &&
    address.value != "" &&
    regsnwapper.value != ""
  ) {
    const obj = {
      from_name: "Global Iq Website",
      st_fristname: fristname.value,
      st_lastname: lastname.value,
      st_selectedcourse: selectedcourse.value,
      st_phone: phonenumber.value,
      st_email: email.value,
      st_address: address.value,
      rg_number: regsnwapper.value,
    };
    emailjs.send("service_24nwyab", "template_tuqbo3m", obj).then(
      function (response) {
        alert("SENT SUCCESS!");
        fristname.value = "";
        lastname.value = "";
        selectedcourse.value = "";
        phonenumber.value = "";
        email.value = "";
        address.value = "";
        regsnwapper.value = "";
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
const srtlogo = document.querySelector(".srtlogo").src;
printbtn.addEventListener("click", () => {
  if (
    fristname.value != "" &&
    lastname.value != "" &&
    selectedcourse.value != "" &&
    phonenumber.value != "" &&
    email.value != "" &&
    address.value != "" &&
    regsnwapper.value != ""
  ) {
    const content = `
    <div>
    <img src="${srtlogo}" style="
    width: 60%;
    margin: 0 auto;
"/>
    </div>
    <form class="my-form form bg-white w-full relative">
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

          <div class="flex space-x-5 mt-5">
            <select
              class="my-select-course try-pass w-1/2 bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="${selectedcourse.value}" selected="selected">${selectedcourse.value}</option>
            </select>
            <input
          type="text"
          name=""
          id=""
          placeholder="${regsnwapper.value}"
          class="my-regsn border p-2 w-1/2"
        />
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
  } else {
    alert("Please Fill The Form");
  }
});
