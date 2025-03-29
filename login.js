let isLogin = true;
const title = document.getElementById("title");
const form = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");

function toggleForm() {
    isLogin = !isLogin;
    title.textContent = isLogin ? "Login" : "Register";
    form.querySelector("button").textContent = isLogin ? "Login" : "Register";
    form.querySelector(".toggle-form").innerHTML = isLogin
        ? `Don't have an account? <span onclick="toggleForm()">Register</span>`
        : `Already have an account? <span onclick="toggleForm()">Login</span>`;
}

function saveUser(username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
}

function getUser(username) {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    return users[username];
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = form.querySelector("#username").value;
    const password = form.querySelector("#password").value;

    if (!isLogin) {
        if (getUser(username)) {
            errorMessage.textContent = "Username already exists!";
            errorMessage.style.display = "block";
        } else {
            saveUser(username, password);
            alert("Registration successful!");
            toggleForm();
        }
    } else {
        if (getUser(username) && getUser(username) === password) {
            alert("Login successful!");
            localStorage.setItem("username", username); // Save username to localStorage
            window.location.href = "home.html"; // Redirect to home.html
        } else {
            errorMessage.textContent = "Invalid username or password";
            errorMessage.style.display = "block";
        }
    }
})