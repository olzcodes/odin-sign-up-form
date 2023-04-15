const inputs = document.querySelectorAll("input");

inputs.forEach((input) =>
  input.addEventListener("invalid", function () {
    input.classList.add("error");
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
  } else {
    passwordMessageEl.textContent = "";
  }
});

const passwordsMatching = function (input) {
  if (
    passwordInput.value.length === confirmPasswordInput.value.length &&
    passwordInput.value !== confirmPasswordInput.value
  )
    return false;

  let currentIndex = input.value.length - 1;
  return (
    passwordInput.value[currentIndex] ===
    confirmPasswordInput.value[currentIndex]
  );
};

const toggleSubmitBtn = function () {
  if (passwordInput.value !== confirmPasswordInput.value) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
};

confirmPasswordInput.addEventListener("keyup", function () {
  if (passwordInput.value === "" || confirmPasswordInput.value === "") return;
  if (!passwordsMatching(confirmPasswordInput)) {
    confirmPasswordMessageEl.textContent = `Passwords do not match`;
    confirmPasswordInput.classList.remove("error");
    confirmPasswordInput.classList.add("nomatch");
  } else {
    confirmPasswordMessageEl.textContent = "";
    confirmPasswordInput.classList.add("error");
    confirmPasswordInput.classList.remove("nomatch");
  }
  toggleSubmitBtn();
});

passwordInput.addEventListener("keyup", function () {
  if (passwordInput.value === "" || confirmPasswordInput.value === "") return;
  if (!passwordsMatching(passwordInput)) {
    confirmPasswordMessageEl.textContent = `Passwords do not match`;
    confirmPasswordInput.classList.remove("error");
    confirmPasswordInput.classList.add("nomatch");
  } else {
    confirmPasswordMessageEl.textContent = "";
    confirmPasswordInput.classList.add("error");
    confirmPasswordInput.classList.remove("nomatch");
  }
  toggleSubmitBtn();
});
