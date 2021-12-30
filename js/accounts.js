var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

var usernameInput = document.getElementById("usernameInput");
var passwordInput = document.getElementById("passwordInput");

onStart();

function onStart() {
    loginButton.onclick = onLoginButton;
    registerButton.onclick = onRegisterButton;
}

function onLoginButton() {
    $.ajax({
        url: "http://www.baking.local/php/accounts.php",
        method: "get",
        data: {action: 'loginUser', username: usernameInput.value, password: passwordInput.value},
        success: function(result) {
            console.log(result);
        }
    })
}

function onRegisterButton() {
    $.ajax({
        url: "http://www.baking.local/php/accounts.php",
        method: "get",
        data: {action: 'loginUser', username: usernameInput.value, password: passwordInput.value},
        success: function(result) {
            console.log(result);
        }
    })
}