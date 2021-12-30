<?php 
    $connection = mysqli_connect('localhost', 'root', '', 'yarabakery');

    if (!$connection) {
        echo 'connection problems!';
    }
    else {
        echo 'connected!';
    }

    if (isset($_GET['action'])) {
        $action = $_GET['action'];

        if ($action === 'loginUser'){
            echo 'login' . ' with username: ' . $_GET['username'];
        }
        else if ($action === 'registerUser') {
            echo 'register';
        }
    }
    else {
        echo 'no action!';
    }

    $connection->close();
?>