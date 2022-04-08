const signUpForm = document.getElementById("sign-up-form");
const emailInput = document.getElementById("email-input");
const errorMessage = document.getElementById("email-error");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

signUpForm.addEventListener("submit", (e) => {
  if (emailInput.value === "") {
    errorMessage.classList.add("display-error");
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.setAttribute("aria-describedBy", errorMessage);
    errorMessage.innerHTML = "Oops! Please add your email";
  } else if (!emailInput.value.match(emailRegex)) {
    errorMessage.classList.add("display-error");
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.setAttribute("aria-describedBy", errorMessage);
    errorMessage.innerHTML = "Oops! Please check your email";
  } else {
    errorMessage.classList.remove("display-error");
    emailInput.removeAttribute("aria-invalid");
    emailInput.removeAttribute("aria-describedBy");
    emailInput.value = "";
  }
  e.preventDefault();
});
