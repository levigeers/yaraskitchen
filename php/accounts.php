<?php 
    $connection = mysqli_connect('localhost', 'root', '', 'yarabakery');

    if (isset($_GET['action'])) {
        $action = $_GET['action'];

        if ($action === 'loginUser') {
            if (isset($_GET['username'])) {
                $username = $_GET['username'];
                $password = $_GET['password'];

                $query = "SELECT * FROM users WHERE username='$username'";

                $result = mysqli_query($connection, $query);
                
                if (mysqli_num_rows($result) > 0) {
                    while ($row = mysqli_fetch_assoc($result)) {
                        $passwordHash = password_verify($password, $row['password']);

                        if ($passwordHash){
                            echo 'login succes';
                        }
                        else {
                            echo 'login failed';
                        }
                    }
                }
            }
        }
        if ($action === 'registerUser') { 
            $username = $_GET['username'];
            $password = $_GET['password'];

            $passwordHashed = password_hash($password, PASSWORD_DEFAULT);

            $query = "INSERT INTO `users`(`username`, `password`) VALUES ('$username','$passwordHashed')";
            
            if ($connection->query($query) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }

    $connection->close();
?>