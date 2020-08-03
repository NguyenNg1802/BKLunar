<?php
    require_once('mysqli_connect.php');
    
    $query = "SELECT * FROM users";
    $result = mysqli_query($dbc,$query);
    $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($json, JSON_PRETTY_PRINT);
    mysqli_close($dbc);
?>