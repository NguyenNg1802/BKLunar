<?php
    //require_once('mysqli_connect.php');
    require_once '../common.php';
    $prod_type = "Tea";
    $sub_category = "Premium Teapresso";
    $products = getProducts($prod_type, $sub_category);
    echo $products;
?>