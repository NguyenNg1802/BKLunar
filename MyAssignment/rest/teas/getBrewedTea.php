<?php
   
    /*$prod_type = "Tea";
    $sub_category = "Brewed Tea";
    $query = "SELECT * FROM products WHERE prod_type='$prod_type' AND sub_category='$sub_category'";
    $result = mysqli_query($dbc,$query);
    $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($json, JSON_PRETTY_PRINT);
    mysqli_close($dbc);*/
    //require_once('mysqli_connect.php');
    require_once '../common.php';
    $prod_type = "Tea";
    $sub_category = "Brewed Tea";
    $products = getProducts($prod_type, $sub_category);
    echo $products;
?>