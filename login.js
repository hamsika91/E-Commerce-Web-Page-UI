const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "hamsi_kris" && password === "stri") {
        if(confirm("You have successfully logged in."));
        window.location.href="home_page.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})