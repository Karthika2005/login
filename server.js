function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  const isNumeric = /^\d+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

  if (username === "" || password === "") {
    errorMessage.textContent = "Both fields are required!";
    errorMessage.style.display = "block";
    return false;
  }

  if (isNumeric.test(username)) {
    errorMessage.textContent = "Username cannot be only numbers!";
    errorMessage.style.display = "block";
    return false;
  }

  if (username.length < 6) {
    errorMessage.textContent = "Username must be at least 6 characters!";
    errorMessage.style.display = "block";
    return false;
  }

  if (!passwordRegex.test(password)) {
    errorMessage.textContent =
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!";
    errorMessage.style.display = "block";
    return false;
  }

  errorMessage.textContent = "";
  errorMessage.style.display = "none";

  alert("Login successful!");

  displayUserInfo(username, password);

  return false;
}

function displayUserInfo(username, password) {
  const loginContainer = document.querySelector(".login-container");

  const userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("user-info");
  userInfoDiv.innerHTML = `
        <h3>Login Details:</h3>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

  loginContainer.innerHTML = "";
  loginContainer.appendChild(userInfoDiv);
}
