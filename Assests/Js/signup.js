function togglePassword() {
    const passwordField = document.getElementById("password");
    const passwordType = passwordField.getAttribute("type");
    if (passwordType === "password") {
      passwordField.setAttribute("type", "text");
    } else {
      passwordField.setAttribute("type", "password");
    }
  }
  
  function toggleConfirmPassword() {
    const confirmPasswordField = document.getElementById("confirmPassword");
    const passwordType = confirmPasswordField.getAttribute("type");
    if (passwordType === "password") {
      confirmPasswordField.setAttribute("type", "text");
    } else {
      confirmPasswordField.setAttribute("type", "password");
    }
  }
  
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password.length < 8 || password.length > 12) {
      alert("Password must be between 8 and 12 characters.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      // Signup logic or form submission
      alert("Signup successful!");
    }
  });
  