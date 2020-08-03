<?php
    session_start();
    require_once 'common.php';
    require_once('mysqli_connect.php');
    require_once 'googleapi/vendor/autoload.php';
    mysqli_set_charset($dbc,'utf8');
    $CLIENT_ID= "605216785871-d0h8gi8g19ifncnt5t42s46kdkoggt2j.apps.googleusercontent.com";

    $id_token = $_POST['idtoken'];
    $role = "user";
    $type = 'google';
    $client = new Google_Client(['client_id' => $CLIENT_ID]);  // Specify the CLIENT_ID of the app that accesses the backend
    $payload = $client->verifyIdToken($id_token);
    if ($payload) {
        $userid = $payload['sub'];
        $query = "SELECT * FROM users WHERE googleid='$userid' AND `type`='$type'";
        $result = mysqli_query($dbc,$query);
        if (mysqli_num_rows($result) == 1) {// user already in the database
            $row = mysqli_fetch_assoc($result);
            setUserSession($row);
            $response = getUserProfileJson();
            echo $response;
        } 
        else if(mysqli_num_rows($result) == 0) {
            $firstname = $payload['given_name'];
            $lastname = $payload['family_name'];
            $email = $payload['email'];
            $query1 = "INSERT INTO users VALUES (NULL,?,NULL,?,?,?,NULL,NULL,NULL,NULL,?,NULL,?)";
            $stmt = mysqli_prepare($dbc, $query1);
            mysqli_stmt_bind_param($stmt, "ssssss", $email, $firstname, $lastname ,$userid, $role, $type);
            mysqli_stmt_execute($stmt);

            //fetch inserted row
            $result = mysqli_query($dbc,$query);
            $row = mysqli_fetch_assoc($result);
            setUserSession($row);
            $response = getUserProfileJson();
            echo $response;
        }
        // If request specified a G Suite domain:
        //$domain = $payload['hd'];
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