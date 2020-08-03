<?php
    function setUserSession($row){
        $_SESSION['id'] = $row['id'];
        $_SESSION['email'] = $row['email'];
        $_SESSION['firstname'] = $row['firstname'];
        $_SESSION['lastname'] = $row['lastname'];
        $_SESSION['birthdate'] = date("d-m-Y", strtotime($row["birthdate"]));
        $_SESSION['phone'] = $row['phone'];
        $_SESSION['country'] = $row['country'];
        $_SESSION['role'] = $row['role'];
        $_SESSION['address'] = $row['address'];
        $_SESSION['isLoggedIn'] = true;
        $_SESSION['type'] = $row['type'];
        
    }

    function getUserProfileJson(){
        $result = array(
            "status" => 1,
            "email" => $_SESSION['email'],
            "firstname" => $_SESSION['firstname'],
            "lastname" => $_SESSION['lastname'],
            "birthdate" => $_SESSION['birthdate'],
            "phone" => $_SESSION['phone'],
            "country" => $_SESSION['country'],
            "role" => $_SESSION['role'],
            'address' => $_SESSION['address'],
            "type" => $_SESSION['type']
        );
        return json_encode($result, JSON_PRETTY_PRINT);
    }

    function getProducts($prod_type, $sub_category){
        require_once('mysqli_connect.php');
        $query = "SELECT * FROM products WHERE prod_type='$prod_type' AND sub_category='$sub_category'";
        $result = mysqli_query($dbc,$query);
        $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
        mysqli_close($dbc);
        return json_encode($json, JSON_PRETTY_PRINT);
        
    }
?>