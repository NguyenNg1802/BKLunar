<?php
    require_once('mysqli_connect.php');
    //mysqli_set_charset($dbc,'utf8');
    //error_reporting(0);
    $firstname = $_POST['firstname'];
    $lastname= $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password = md5($password);         ///hash the password before put in database
    $role = 'user';
    $type = 'email';
    $date = str_replace('/', '-', $_POST['birthdate']);
    $birthdate = date('Y-m-d', strtotime($date));
    //check if legit email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        //check if email already exist in database:
        $queryemail = "SELECT * FROM users WHERE email='$email' AND `type`='$type'";
        $result = mysqli_query($dbc,$queryemail);
        if (mysqli_num_rows($result) == 0) {// this email not yet registered
            $query = "INSERT INTO users VALUES (NULL,?,?,?,?,NULL,NULL,NULL,NULL,?,?,NULL,?)";
           
            $stmt = mysqli_prepare($dbc, $query);
            mysqli_stmt_bind_param($stmt, "sssssss", $email, $password, $firstname, $lastname, $birthdate, $role, $type);
            mysqli_stmt_execute($stmt);
            $response = array(
                "status" => 1,
                "body" => "successfully create account"
            );
            echo json_encode($response, JSON_PRETTY_PRINT);
            
        } 
        else {// this email already registered
            $response = array(
                "status" => 0,
                "error" => "email already exist"
            );
            echo json_encode($response, JSON_PRETTY_PRINT);
        }
    }
    else {
        echo "$email is not a valid email address";
    }
    mysqli_close($dbc);
?>