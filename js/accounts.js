var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

loginButton.onclick = onLoginButton;
registerButton.onclick = onRegisterButton;

function onLoginButton() {
    $.ajax({
        url: "http://www.baking.local/php/accounts.php",
        method: "get",
        data: {action: 'loginUser', username: 'Levi'},
        success: function(result) {
            console.log(result);
        }
    })
}

function onRegisterButton() {
    $.ajax({
        url: "http://www.baking.local/php/accounts.php",
        method: "get",
        data: {action: 'registerUser', username: 'Levi'},
        success: function(data) {
            
        }
    })
}