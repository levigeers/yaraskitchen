<?php 
    $connection = mysqli_connect('localhost', 'root', '', 'yarabakery');

    if (!$connection) {
        echo 'connection problems!';
    }
    else {
        echo 'connected!';
    }

    if (isset('action')) {
        $action = $_GET['action'];

        if ($action === 'userLogin'){
            echo 'login';
        }
        else if ($action === 'userRegister') {
            echo 'register';
        }
    }
    else {
        echo 'no action!';
    }

    // $query = "SELECT * FROM `users`";
    // $result = $connection->query($query);

    // if ($result->num_rows > 0) {
    //     while ($row = $result->fetch_assoc()) {
    //         // echo $row['username'];
    //     }
    // }

    $connection->close();
?>