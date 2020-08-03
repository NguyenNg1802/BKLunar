<?php
    require_once('mysqli_connect.php');
    $keyword = $_POST['keyword'];
    //check if legit password
    $query = "SELECT * FROM products WHERE `name` LIKE '%" .$keyword ."%' LIMIT 4";
    $result = mysqli_query($dbc,$query);
    $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($json, JSON_PRETTY_PRINT);
    mysqli_close($dbc);
?>