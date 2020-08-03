<?php
    //require_once('mysqli_connect.php');
    require_once '../common.php';
    $prod_type = "Coffee";
    $sub_category = "Traditional Coffee";
    $products = getProducts($prod_type, $sub_category);
    echo $products;
?>