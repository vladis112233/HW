function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      document.querySelector(".password-toggle").innerText = "Hide password";
    } else {
      passwordInput.type = "password";
      document.querySelector(".password-toggle").innerText = "Show password";
    }
  }
  
  document.getElementById("registration-form").addEventListener("submit", function(event) {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    if (!usernameInput.value || !emailInput.value || !passwordInput.value) {
      alert("Будь ласка, заповніть всі поля!");
      event.preventDefault();
    }
  });