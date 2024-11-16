// Show/Hide Modals
const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");

document.getElementById("login-btn").addEventListener("click", () => {
  loginModal.classList.remove("hidden");
});

document.getElementById("signup-btn").addEventListener("click", () => {
  signupModal.classList.remove("hidden");
});

document.getElementById("close-login").addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

document.getElementById("close-signup").addEventListener("click", () => {
  signupModal.classList.add("hidden");
});

// Password visibility toggle
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
