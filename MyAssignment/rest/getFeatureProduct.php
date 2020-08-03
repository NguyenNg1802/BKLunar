<?php
    class Product {
        private $id;
        private $name;
        private $price;
        private $image;
        private $prod_type;
        public function __construct($id,$name, $price, $image, $prod_type){
            $this->id = $id;
            $this->name = $name;
            $this->price = $price;
            $this->image = $image;
            $this->prod_type = $prod_type;
        }
        public function getName(){
            return $this->name;
        }
        public function getPrice(){
            return $this->price;
        }
        public function getImage(){
            return $this->image;
        }
        public function getProdType(){
            return $this->prod_type;
        }
        public function getId(){
            return $this->id;
        }
        public function toJSON(){
            $json = array(
                'id' => $this->getId(),
                'name' => $this->getName(),
                'price' => $this->getPrice(),
                'image' => $this->getImage(),
                'prod_type' => $this->getProdType()
            );
        
            return json_encode($json);
        }
    }
    require_once('mysqli_connect.php');
    // get Featured Coffee product
    $query_coffee_feature = "SELECT * FROM products WHERE prod_type='Coffee' LIMIT 4";
    $result_coffees = mysqli_query($dbc,$query_coffee_feature);
    $coffees_feature=array();
    while ($row = mysqli_fetch_assoc($result_coffees)) {
        $product = new Product($row['id'], $row['name'], $row['price'], $row['image'], $row['prod_type']);
        array_push($coffees_feature, $product->toJSON());
    }
    $coffees_feature_json = json_encode($coffees_feature);

    // get Featured Tea product
    $query_tea_feature = "SELECT * FROM products WHERE prod_type='Tea' LIMIT 4";
    $result_teas = mysqli_query($dbc,$query_tea_feature);
    $teas_feature=array();
    while ($row = mysqli_fetch_assoc($result_teas)) {
        $product = new Product($row['id'], $row['name'], $row['price'], $row['image'], $row['prod_type']);
        array_push($teas_feature, $product->toJSON());
    }
    $teas_feature_json = json_encode($teas_feature);

    // get Featured Milk product
    $query_milk_feature = "SELECT * FROM products WHERE prod_type='Milk' LIMIT 4";
    $result_milks = mysqli_query($dbc,$query_milk_feature);
    $milks_feature=array();
    while ($row = mysqli_fetch_assoc($result_milks)) {
        $product = new Product($row['id'], $row['name'], $row['price'], $row['image'], $row['prod_type']);
        array_push($milks_feature, $product->toJSON());
    }
    $milks_feature_json = json_encode($milks_feature);

    $feature_products = array(
        'teas' => $teas_feature_json,
        'milks' => $milks_feature_json,
        'coffees' => $coffees_feature_json
    );
    echo json_encode($feature_products)

?>