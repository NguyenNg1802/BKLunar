<?php
    session_start();
    require_once 'common.php';
    require_once('mysqli_connect.php');
    mysqli_set_charset($dbc,'utf8');
    
    if(isset($_SESSION['isLoggedIn'])){// check if session expired
        //get POST data
        $new_pass = $_POST['new_pass'];
        $old_pass = $_POST['old_pass'];
        $user_id = $_SESSION['id'];

        //check if user old password correct
        $query = $query = "SELECT * FROM users WHERE id=$user_id AND password='$old_pass'";
        $result = mysqli_query($dbc,$query);
        if (mysqli_num_rows($result) == 1) {// the old passworld is correct
            // update the password in database
            $update_pass_query = "UPDATE users SET `password`=? WHERE id=?";
            $stmt = mysqli_prepare($dbc, $update_pass_query);
            mysqli_stmt_bind_param($stmt, "si", $new_pass, $user_id);
            mysqli_stmt_execute($stmt);
            $response = array(
                "status" => 1,
                "message" => "Successfully change password"
            );
            echo json_encode($response, JSON_PRETTY_PRINT);
            
        } else { // old pass not correct
            $response = array(
                "status" => -1,
                "message" => "Old password not correct"
            );
            echo json_encode($response, JSON_PRETTY_PRINT);
        }
        $result = mysqli_query($dbc,$query);
    }
    else{// Session expired
        $response = array(
            "status" => -1,
            "message" => "Your session has been expire please relogin"
        );
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
    mysqli_close($dbc);
?>