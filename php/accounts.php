<?php 
    $connection = mysqli_connect('localhost', 'root', '', 'yarabakery');

    if (!$connection) {
        echo 'connection problems!';
    }
    else {
        echo 'connected!';
    }

    $query = "SELECT * FROM `users`";
    $result = $connection->query($query);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo $row['username'];
        }
    }

    $connection->close();

    // if (isset('action')) {
    //     if ($_GET['action'] == "loginUser"){

    //     }
    // }
?>