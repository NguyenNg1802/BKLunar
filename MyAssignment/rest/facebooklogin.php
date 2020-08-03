<?php
    session_start();
    require_once 'common.php';
    require_once('mysqli_connect.php');
    mysqli_set_charset($dbc,'utf8');
    $id_token = $_POST['idtoken'];
    $name = $_POST['name'];
    $role = 'user';
    $type = 'facebook';
    $query = "SELECT * FROM users WHERE facebookid='$id_token' AND `type`='$type'";
    $result = mysqli_query($dbc,$query);
    if (mysqli_num_rows($result) == 1) {//user already in database
        $row = mysqli_fetch_assoc($result);
        setUserSession($row);
        $response = getUserProfileJson();
        echo $response;
    } 
    else if(mysqli_num_rows($result) == 0) {
        $name_arr = explode(" ",$name);
        $firstname = $name_arr[0];
        $lastname = $name_arr[sizeof($name_arr)-1];
        $query1 = "INSERT INTO users VALUES (NULL,NULL,NULL,?,?,NULL,?,NULL,NULL,NULL,?,NULL,?)";
        $stmt = mysqli_prepare($dbc, $query1);
        mysqli_stmt_bind_param($stmt, "sssss", $firstname, $lastname ,$id_token, $role, $type);
        mysqli_stmt_execute($stmt);

        //fetch inserted row
        $result = mysqli_query($dbc,$query);
        $row = mysqli_fetch_assoc($result);
        setUserSession($row);

        $response = getUserProfileJson();
        echo $response;
    }
    else {
        // Invalid ID token
        $response = array(
            "status" => 0,
            "error" => "Invalid login"
        );
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
    mysqli_close($dbc);
?>