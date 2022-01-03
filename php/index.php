<?php 
    session_start();
    if (isset($_POST['action'])) {
        if ($_POST['action'] === "checkSession") { 
            if (session_status() === PHP_SESSION_ACTIVE && isset($_SESSION['username'])) {
                $userRole = 0;
                if (isset($_SESSION['role'])) {
                    $userRole = $_SESSION['role'];
                }

                echo 'active-' . $userRole;
            } else {
                echo 'inactive';
            }
        }
    }
?>