let loginForm = undefined;
let createAccountForm = undefined;

const loginUsernameInput = document.getElementById("loginUsernameInput");
const loginPasswordInput = document.getElementById("loginPasswordInput");

const registerUsernameInput = document.getElementById("registerUsernameInput");
const registerEmailInput = document.getElementById("registerEmailInput");
const registerPasswordInput = document.getElementById("registerPasswordInput");
const registerConfirmPasswordInput = document.getElementById("registerConfirmPasswordInput");

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

function showLoginPage(e) {
    if (e !== undefined) {
        e.preventDefault();
    }
    
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
}

function showRegisterPage(e) {
    if (e !== undefined) {
        e.preventDefault();
    }

    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    loginForm = document.querySelector("#login");
    createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        showRegisterPage(e);
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        showLoginPage(e);
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        $username = loginUsernameInput.value;
        $password = loginPasswordInput.value;

        $.ajax({
            method: "post",
            url: "../../php/login.php",
            data: {action: "login", username: $username, password: $password},
            success : function(result){
                console.log(result);

                if (result === "succesful"){
                    setFormMessage(loginForm, "succes", "Logged in succesfully!");

                    setTimeout(function(){
                        window.location.href = "http://www.baking.local/index.html";
                    }, 1000);
                } 
                else if (result === "error - no user found"){
                    setFormMessage(loginForm, "error", "No user found with the given credentials!");
                }
                else if (result === "error - check user failed") {
                    setFormMessage(loginForm, "error", "Something went wrong! Please try again.");
                }
            },
            error : function(jqXHR, exception) {
                setFormMessage(createAccountForm, "error", "Something went wrong creating your account!");
            }
        });
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        $username = registerUsernameInput.value;
        $email = registerEmailInput.value;
        $password = registerPasswordInput.value;
        $confirmedPassword = registerConfirmPasswordInput.value;

        if ($password !== $confirmedPassword) {
            // the password is not the same as the confirm password
        }

        $.ajax({
            method: "post",
            url: "../../php/login.php",
            data: {action: "register", username: $username, email: $email, password: $password},
            success : function(result){
                console.log(result);

                if (result === "succesful"){
                    setFormMessage(createAccountForm, "succes", "Account created succesfully!")

                    setTimeout(function(){
                        showLoginPage();
                    }, 1000);
                } 
                else if (result === "error"){
                    setFormMessage(createAccountForm, "error", "Something went wrong creating your account!");
                }
                else if (result === "error - duplicateuser") {
                    setFormMessage(createAccountForm, "error", "An account with this email or username already exists!");
                }
            },
            error : function(jqXHR, exception) {
                setFormMessage(createAccountForm, "error", "Something went wrong creating your account!");
            }
        });
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