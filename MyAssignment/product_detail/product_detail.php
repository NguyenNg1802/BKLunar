<?php
    $host = 'Localhost';
    $user = "root";
    $password = "";
    $database = "assignment";

    $connect = mysqli_connect($host, $user, $password, $database);
    mysqli_set_charset($connect,'utf8');

    $sql = "SELECT * FROM products WHERE `name` = '".$_POST["name"]."'";
    $result = mysqli_query($connect, $sql);
    if (mysqli_num_rows($result) > 0) {
        $product_list = array();
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($product_list,$row['id'], $row["name"], $row["price"], $row["image"]);
            //echo $row["name"];
        }
        $string=implode(",",$product_list);
        echo $string;
    }
    else {
        echo "0 result";
    }
    mysqli_close($connect);
?>