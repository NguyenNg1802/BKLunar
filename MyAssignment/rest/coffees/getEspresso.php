<?php
    require_once '../common.php';
    $prod_type = "Coffee";
    $sub_category = "Espresso";
    $products = getProducts($prod_type, $sub_category);
    echo $products;
?>