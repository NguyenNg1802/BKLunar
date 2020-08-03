<?php
    session_start();
    require_once 'common.php';
    require_once('mysqli_connect.php');
    mysqli_set_charset($dbc,'utf8');
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password = md5($password);
    $type = "email";
    //check if legit password
    $query = "SELECT * FROM users WHERE email='$email' AND password='$password' AND `type` = '$type' ";
    $result = mysqli_query($dbc,$query);
    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        setUserSession($row);
        $response = getUserProfileJson();
        echo $response;
        
    } else {
        $response = array(
            "status" => 0
        );
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
    mysqli_close($dbc);

?>