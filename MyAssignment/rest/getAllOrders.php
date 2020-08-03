<?php
    require_once('mysqli_connect.php');
    $query = "SELECT o.id
            , o.product_id
            , o.quantity
            , p.name AS product_name
            , o.user_id
            , u.firstname
            , u.lastname
            , u.phone
   	        , u.address
            , u.country
            FROM orders o
            INNER JOIN products p
                on o.product_id = p.id
            INNER JOIN users u
                on o.user_id = u.id";
    $result = mysqli_query($dbc,$query);
    $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($json, JSON_PRETTY_PRINT);
    mysqli_close($dbc);
?>