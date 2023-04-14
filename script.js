const inputs = document.querySelectorAll("input");

inputs.forEach((input) =>
  input.addEventListener("invalid", function () {
    input.classList.add("error");
    console.log("Added");
  })
);

const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm_password");
const passwordMessageEl = document.querySelector(".password-message");
const confirmPasswordMessageEl = document.querySelector(
  ".confirm-password-message"
);
const submitBtn = document.querySelector('button[type="submit"');

const passwordMinLength = 6;
const passwordMaxLength = 12;

document.addEventListener("keyup", function () {
  if (passwordInput.value === "") return;
  if (passwordInput.value.length > 0 && passwordInput.value.length < 6) {
    passwordMessageEl.textContent = `Password must be between ${passwordMinLength} and ${passwordMaxLength} characters`;
    passwordInput.classList.add("error");
    submitBtn.disabled = true;
  } else {
    passwordMessageEl.textContent = "";
    submitBtn.disabled = false;
  }
});

confirmPasswordInput.addEventListener("keyup", function () {
  if (passwordInput.value === "" || confirmPasswordInput.value === "") return;
  if (
    confirmPasswordInput.value[confirmPasswordInput.value.length - 1] !==
    passwordInput.value[confirmPasswordInput.value.length - 1]
  ) {
    confirmPasswordMessageEl.textContent = `Passwords do not match`;
    confirmPasswordInput.classList.remove("error");
    confirmPasswordInput.classList.add("nomatch");
    submitBtn.disabled = true;
  } else {
    confirmPasswordMessageEl.textContent = "";
    confirmPasswordInput.classList.add("error");
    confirmPasswordInput.classList.remove("nomatch");
    submitBtn.disabled = false;
  }
});

passwordInput.addEventListener("keyup", function () {
  if (passwordInput.value === "" || confirmPasswordInput.value === "") return;
  if (
    confirmPasswordInput.value[passwordInput.value.length - 1] !==
    passwordInput.value[passwordInput.value.length - 1]
  ) {
    confirmPasswordMessageEl.textContent = `Passwords do not match`;
    confirmPasswordInput.classList.remove("error");
    confirmPasswordInput.classList.add("nomatch");
    submitBtn.disabled = true;
  } else {
    confirmPasswordMessageEl.textContent = "";
    confirmPasswordInput.classList.add("error");
    confirmPasswordInput.classList.remove("nomatch");
    submitBtn.disabled = false;
  }
});
