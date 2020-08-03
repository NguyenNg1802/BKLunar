<?php
    require_once('mysqli_connect.php');
    $prod_type = $_POST['prod_type'];
    $sub_category = $_POST['sub_category'];
    $query = "SELECT * FROM products WHERE prod_type='$prod_type' AND sub_category='$sub_category'";
    $result = mysqli_query($dbc,$query);
    $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($json, JSON_PRETTY_PRINT);
    mysqli_close($dbc);
?>