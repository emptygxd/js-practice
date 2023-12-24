const enter = document.querySelector("#enter");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailInvalid = document.querySelector("#emailInvalid");
const emailMargin = document.querySelector("#emailMargin");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const passwordInvalid = document.querySelector("#passwordInvalid");
const passwordMargin = document.querySelector("#passwordMargin");

const checkbox = document.querySelector("#checkbox");
const customCheckbox = document.querySelector("#customCheckbox");
const checkboxInvalid = document.querySelector("#checkboxInvalid");
const checkboxMargin = document.querySelector("#passwordMargin");

const user = {
  email: "",
  password: "",
};
/**
 * email.classList.contains("warning") &&
      emailInvalid.classList.contains("email-invalid")
      margin-top: -19px
 */
function checkEmail() {
  if (!validateEmail(email.value)) {
    email.classList.add("warning");

    emailError.classList.add("hidden");
    emailError.classList.remove("error");

    emailInvalid.classList.remove("hidden");
    emailInvalid.classList.add("error");
    emailMargin.setAttribute("style", "margin-top: 5px");
  }

  if (email.value == "") {
    if (
      !(
        email.classList.contains("warning") &&
        emailError.classList.contains("error")
      )
    ) {
      email.classList.add("warning");

      emailInvalid.classList.add("hidden");
      emailInvalid.classList.remove("error");

      emailError.classList.remove("hidden");
      emailError.classList.add("error");
      emailMargin.setAttribute("style", "margin-top: 5px");
    }
  }

  if (validateEmail(email.value)) {
    emailInvalid.classList.add("hidden");
    emailInvalid.classList.remove("error");

    emailError.classList.add("hidden");
    emailError.classList.remove("error");

    emailMargin.removeAttribute("style");
    email.classList.remove("warning");

    user.email = email.value;
  }
}

function checkPassword() {
  if (password.value.length < 8) {
    password.classList.add("warning");

    passwordError.classList.add("hidden");
    passwordError.classList.remove("error");

    passwordInvalid.classList.remove("hidden");
    passwordInvalid.classList.add("error");

    passwordMargin.setAttribute("style", "margin-top: 5px");
  }

  if (password.value == "") {
    if (
      !(
        password.classList.contains("warning") &&
        passwordError.classList.contains("error")
      )
    ) {
      password.classList.add("warning");

      passwordInvalid.classList.add("hidden");
      passwordInvalid.classList.remove("error");

      passwordError.classList.remove("hidden");
      passwordError.classList.add("error");

      passwordMargin.setAttribute("style", "margin-top: 5px");
    }
  }

  if (password.value.length >= 8) {
    passwordInvalid.classList.add("hidden");
    passwordInvalid.classList.remove("error");

    passwordError.classList.add("hidden");
    passwordError.classList.remove("error");

    passwordMargin.removeAttribute("style");
    password.classList.remove("warning");

    user.password = password.value;
  }
}

function checkCheckbox() {
  if (!checkbox.checked) {
    customCheckbox.classList.add("warning");

    checkboxInvalid.classList.remove("hidden");
    checkboxInvalid.classList.add("error");

    enter.setAttribute("style", "margin-top: -19px");
  } else {
    customCheckbox.classList.remove("warning");

    checkboxInvalid.classList.add("hidden");
    checkboxInvalid.classList.remove("error");

    enter.removeAttribute("style");
  }
}

function checkAll() {
  if (
    !(
      email.classList.contains("warning") ||
      password.classList.contains("warning") ||
      customCheckbox.classList.contains("warning")  
    )
  ) {
    console.log(user);
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

enter.addEventListener("click", checkEmail);
enter.addEventListener("click", checkPassword);
enter.addEventListener("click", checkCheckbox);
enter.addEventListener("click", checkAll);
