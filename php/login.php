<?php 
require_once("./config.php");

if (isset($_GET['action'])){
    if ($_GET['action'] == 'login'){
        return false;
    }
}
?>