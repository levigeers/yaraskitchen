<?php 
require_once("./config.php");

if (isset($_POST['action'])){
    if ($_POST['action'] == 'login'){
        echo 'login';
    }
    else if ($_POST['action'] == "register"){
        $username = strtolower($_POST['username']);
        $email = strtolower($_POST['email']);
        $password = strtolower($_POST['password']);

        $password = md5($password);

        $checkUser = isUserAlreadyRegistered($connection, $username, $email);

        if ($checkUser === "true"){
            $sql = "INSERT into users (username, email, password) VALUES ('$username', '$email', '$password')";
        
            if ($connection->query($sql) === TRUE){
                echo "succesful";
            } else {
                echo "error";
            }
        } 
        else if ($checkUser === "false") {
            echo "error - duplicateuser";
        }
        else if ($checkUser === "no entries") {
            echo "error - no entries";
        }
        else if ($checkUser === "failed") {
            echo "error - check user failed";
        }
    }

    $connection->close();
}

function isUserAlreadyRegistered($connection, $username, $email) {
    $username = strtolower($username);
    $email = strtolower($email);

    $sql = "SELECT * FROM users WHERE username='$username' OR email='$email'";
    $result = $connection->query($sql);

    if ($connection->error !== "") {
        trigger_error('Invalid query: ' . $connection->error);

        return "failed";
    }

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $rowUsername = strtolower($row['username']);
            $rowEmail = strtolower($row['email']);

            if ($username === $rowUsername || $email === $rowEmail) {
                return "false";
            }
        }

        return "true";
    }

    return "true";
}
?>