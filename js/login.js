const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

const minUsernameLenght = 6;
const maxUsernameLenght = 20;

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        console.log("logging in!");
        console.log("username : " + usernameInput.value);
        console.log("password : " + passwordInput.value);

        $.ajax({
            method: "post",
            url: "../../php/login.php",
            data: {action: "login", username: usernameInput.value, password: passwordInput.value},
            success : function(result){
                console.log(result);
            }
        });

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && (e.target.value.length < minUsernameLenght || e.target.value.length >= maxUsernameLenght)) {
                setInputError(inputElement, `Username must be between ${minUsernameLenght} and ${maxUsernameLenght} long`);
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});