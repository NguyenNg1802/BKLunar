<?php
    //require_once('mysqli_connect.php');
    require_once '../common.php';
    $prod_type = "Coffee";
    $sub_category = "Ice Blended";
    $products = getProducts($prod_type, $sub_category);
    echo $products;
?>