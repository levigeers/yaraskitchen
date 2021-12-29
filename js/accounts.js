var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

loginButton.onclick = onLoginButton;
registerButton.onclick = onRegisterButton;

function onLoginButton() {
    $.ajax({
        url: "http://127.0.0.1:5500/php/accounts.php",
        type: "get",
        data: {action: 'loginUser', username: 'Levi'},
        success: function(data) {
            console.log(data);
        }
    })
}

function onRegisterButton() {
    $.ajax({
        url: "http://127.0.0.1:5500/php/accounts.php",
        type: "get",
        data: {action: 'registerUser', username: 'Levi'},
        success: function(data) {
            console.log(data);
        }
    })
}