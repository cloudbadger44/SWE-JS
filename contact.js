const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");
const submitButton = document.getElementById("submit-btn");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = "1";
    }, 300);
  });

  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Talk to Dr. John";
      formHeading.style.opacity = "1";
    }, 300);
  });
});

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message Deliver!!!!");
  return true;
}

submitButton.addEventListener("click", () => {
  validateForm();
});
