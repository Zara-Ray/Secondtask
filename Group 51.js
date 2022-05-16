/// Mobile

const mobile = document.querySelector(".hamburger");
const header = document.querySelector(".header");

mobile.addEventListener("click", function () {
  header.classList.toggle("modal");

  if (header.classList.contains("modal")) {
    mobile.src = "./image/icon-close.svg";
  } else {
    mobile.src = "./image/icon-hamburger.svg";
  }
});

/// FORM

const passwordEye = document.querySelector(".password--eye");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");

const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const phoneError = document.querySelector(".phoneError");
const passwordError = document.querySelector(".passwordError");
const confirmPasswordError = document.querySelector(".confirmPasswordError");
const genderError = document.querySelector(".genderError");
const btnError = document.querySelector(".btnError");
const a = document.getElementsByClassName;

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

btn.addEventListener("click", function () {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    validatePassword() ||
    !validateCP() ||
    !validateGender()
  ) {
    btnError.style.display = "block";
    btnError.innerHTML = "Please check all fields";
    setTimeout(() => {
      btnError.style.display = "none";
    }, 5000);
    return false;
  }
});

passwordEye.addEventListener("click", function () {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    passwordEye.src = "./image/eye-slash-solid.svg";
  } else if (password.getAttribute("type") === "text") {
    password.setAttribute("type", "password");
    passwordEye.src = "./image/eye-solid.svg";
  }
});

function validateName() {
  const name = document.querySelector(".nameField");
  if (name.value === "") {
    nameError.innerHTML = "Username is required";
    return false;
  } else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateEmail() {
  const email = document.querySelector(".emailField");
  if (email.value === "") {
    emailError.innerHTML = "Email is required";
    return false;
  } else if (!email.value.includes("@" && ".")) {
    emailError.innerHTML = "Email invalid";
    return false;
  } else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validatePhone() {
  const phone = document.querySelector(".phoneField");
  if (phone.value === "") {
    phoneError.innerHTML = "Phone Number is required";
    return false;
  } else if (/[a-zA-Z]/.test(phone.value) || phone.value.length < 10) {
    phoneError.innerHTML = "phone Number invalid";
    return false;
  } else {
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

const passwordField = document.querySelector(".password");
const cP = document.querySelector(".cPField");

function validatePassword() {
  if (passwordField.value === "") {
    passwordError.innerHTML = "Password cannot be blank";
    return false;
  } else {
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateCP() {
  if (passwordField.value !== cP.value) {
    confirmPasswordError.innerHTML = "Password doesn't match";
    return false;
  } else {
    confirmPasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateGender() {
  const gender = document.querySelector(".genderField");

  if (gender.value === "") {
    genderError.innerHTML = "please select a gender";
    return false;
  } else {
    genderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}