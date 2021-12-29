const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

loginButton.onclick = login;
registerButton.onclick = register;

function login() {
    // $.ajax({
    //     url: "http://127.0.0.1:5500/php/accounts.php",
    //     type: "get",
    //     data: {action: 'loginUser', 'username':'Levi'},
    //     success: function(data) {
    //         console.log("hello world");
    //     }
    // })
}

function register() {
    // var mysql = require('mysql');

    // var con = mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "",
    //     database: "yarabakery"
    // });

    // con.connect(function(err) {
    // if (err) throw err;
    //     con.query("SELECT * FROM user", function (err, result, fields) {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // });
}