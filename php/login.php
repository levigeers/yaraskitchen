<?php 
require_once("./config.php");

if (isset($_POST['action'])){
    if ($_POST['action'] == 'login'){
        echo 'login';
    }
    else if ($_POST['action'] == "register"){
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        echo "username : " . $username . " | email : " . $email . " | password: " . $password;
    }
}
?>