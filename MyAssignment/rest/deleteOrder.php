<?php
    require_once('mysqli_connect.php');
    $id = $_POST['id'];
    $query = "DELETE FROM orders WHERE id=$id";
    //$result = mysqli_query($dbc,$query);
    if(mysqli_query($dbc,$query)){ 
        $response = array(
            "status" => 1,
            "id" => $id
        );
        echo json_encode($response, JSON_PRETTY_PRINT);
    }  
    else{ 
        $response = array(
            "status" => -1,
            "message" => "ERROR: Could not able to execute statement: " . mysqli_error($dbc),
            "id" => $id
        );
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
    mysqli_close($dbc);
?>