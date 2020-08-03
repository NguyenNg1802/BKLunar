<?php
    require_once('mysqli_connect.php');
    $prod_type = $_POST['prod_type'];
    $query = "SELECT DISTINCT sub_category FROM products WHERE prod_type='$prod_type'";
    $result = mysqli_query($dbc,$query);
    $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($json, JSON_PRETTY_PRINT);
    mysqli_close($dbc);
?>