const mainCard = document.getElementById("main-card");
const successCard = document.getElementById("success-card");
const dismissMsg = document.getElementById("dismiss-message");

const buttonSubmit = document.getElementById("button");
const emailLabel = document.getElementById("email-label");
const showEmail = document.getElementById("show-email");

const invalidSpan = document.createElement("span");
invalidSpan.setAttribute("class", "invalidStyle");
invalidSpan.textContent = "Valid email required";
const validationRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const userEmail = document.getElementById("user-email");
  verifyEmail(userEmail);
});

function verifyEmail(userEmail) {
  if (validationRgx.test(userEmail.value) === false) {
    userEmail.classList.add("invalidEmail");
    emailLabel.appendChild(invalidSpan);
  } else {
    if (userEmail.classList.contains("invalidEmail")) {
      userEmail.classList.remove("invalidEmail");
      emailLabel.removeChild(invalidSpan);
    }
    mainCard.classList.add("hide");
    successCard.classList.remove("hide");
    successCard.classList.add("show");
    showEmail.innerHTML = userEmail.value;
    userEmail.value = "";
  }
}

dismissMsg.addEventListener("click", (e) => {
  e.preventDefault();
  mainCard.style.display = "flex";
  successCard.style.display = "none";
});
