const inputs = document.querySelectorAll("input");
inputs.forEach((input) =>
  input.addEventListener("invalid", function (e) {
    input.classList.add("error");
    console.log("Added");
  })
);
