<?php
    session_start();
    require_once 'common.php';
    require_once('mysqli_connect.php');
    mysqli_set_charset($dbc,'utf8');
    
    if(isset($_SESSION['isLoggedIn'])){
        //get POST data
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $phone = (string)$_POST['phone'];
        $country = $_POST['country'];
        $birthdate = date('Y-m-d', strtotime($_POST['birthdate']));
        $address = $_POST['address'];
        $user_id = $_SESSION['id'];
        //update into database
        //$query = "UPDATE users SET firtname='$firstname', lastname='$lastname', phone='$phone', country='$country', birthdate='$birthdate', address='$address' WHERE id=$user_id";
        $update_query = "UPDATE users SET firstname=?, lastname=?, phone=?, country=?, birthdate=?, `address`=? WHERE id=?";
        $stmt = mysqli_prepare($dbc, $update_query);
        mysqli_stmt_bind_param($stmt, "ssssssi", $firstname, $lastname, $phone, $country, $birthdate, $address, $user_id);
        mysqli_stmt_execute($stmt);

        // return updated row: set user session again
        $query = "SELECT * FROM users WHERE id=$user_id";
        $result = mysqli_query($dbc,$query);
        if (mysqli_num_rows($result) == 1) {
            $row = mysqli_fetch_assoc($result);
            setUserSession($row);
            $response = getUserProfileJson();
            echo $response;
            
        } else {
            $response = array(
                "status" => -1,
                "message" => "There is something wrong"
            );
            echo json_encode($response, JSON_PRETTY_PRINT);
        }
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