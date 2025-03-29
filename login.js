const correctUsername = "user123";
const correctPassword = "password123";

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
    } else {
        errorMessage.style.display = 'block';
    }
});