<?php
    session_start();
    require_once 'common.php';
    require_once('mysqli_connect.php');
    mysqli_set_charset($dbc,'utf8');
    if(isset($_SESSION['isLoggedIn'])){
        // check if user have address
        $address = $_SESSION['address'];
        if($address == NULL){// empty string or null
            $response = array(
                "status" => -1,
                "message" => "Please update your address to make order"
            );
            echo json_encode($response, JSON_PRETTY_PRINT);
        }
        else{
            $product_id = $_POST['product_id'];
            $quantity = $_POST['quantity'];
            $user_id = $_SESSION['id'];
            $query = "INSERT INTO orders VALUES (NULL,?,?,?)";
            $stmt = mysqli_prepare($dbc, $query);
            mysqli_stmt_bind_param($stmt, "iii", $user_id, $product_id, $quantity);
            mysqli_stmt_execute($stmt);
            $response = array(
                "status" => 1,
                "message" => "Order made"
            );
            echo json_encode($response, JSON_PRETTY_PRINT);
       }
    }
    else {
        $response = array(
            "status" => -1,
            "message" => "Please log in to make your order"
        );
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
    mysqli_close($dbc);

?>