<?php
    session_start();
    require_once('mysqli_connect.php');
    if(isset($_SESSION['isLoggedIn'])){
        $user_id = $_SESSION['id'];
        $query = "SELECT o.id
        , p.name AS product_name
        , p.image
        , p.price
        , o.quantity
        FROM orders o
        INNER JOIN products p
            on o.product_id = p.id
        WHERE o.user_id = $user_id";
        $result = mysqli_query($dbc,$query);
        $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($json, JSON_PRETTY_PRINT);
    }
    else {
        $response = array(
            "status" => -1,
            "message" => "User session expired, please relogin"
        );
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
   
    mysqli_close($dbc);
?>