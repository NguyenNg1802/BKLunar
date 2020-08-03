<?php
    session_start();
    require_once 'common.php';
    if(isset($_SESSION['isLoggedIn'])){
        /*$response = array(
            "status" => 1,
            "email" => $_SESSION['email'],
            "firstname" => $_SESSION['firstname'],
            "lastname" => $_SESSION['lastname'],
            "birthdate" => $_SESSION['birthdate'],
            "phone" => $_SESSION['phone'],
            "country" => $_SESSION['country'],
            "role" => $_SESSION['role']
        );*/
        $response = getUserProfileJson();
        echo $response;
    }
    else {
        $response = array(
            "status" => 0
        );
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
?>