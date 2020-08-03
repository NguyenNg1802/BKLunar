<?php
    //---------------------------------DEPRICATE----------------------------------------------------
    session_start();
    $response = array(
        "status" => 1,
        "firstname" => $_SESSION['firstname'],
        "lastname" => $_SESSION['lastname'],
        "birthdate" => $_SESSION['birthdate'],
        "phone" => $_SESSION['phone'],
        "country" => $_SESSION['country'],
        "role" => $_SESSION['role']
    );
    echo json_encode($response, JSON_PRETTY_PRINT);
?>