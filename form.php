  <?php
$GLOBALS['server']="localhost";
$GLOBALS['username']="psi0nyx";
$GLOBALS['password']="array";
$GLOBALS['database']="pizza_orders";

$GLOBALS['conn']= mysqli_connect($server,$username,$password,$database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";    

$GLOBALS['db'] = mysqli_connect($server,$username,$password,$database);
$Order_id = $_POST['order_id'];
$Customer_name = $_POST['customer_name'];
$Customer_phone = $_POST['customer_phone'];
$Pizza_id = $_POST['pizza_id'];
$Pizza_type = $_POST['pizza_type'];
$Pizza_size = $_POST['pizza_size'];
$Crust_options = $_POST['crust_options'];
$Quantity = $_POST [quantity];
$Drink_type = $_POST['drink_type'];
$Drink_quantity = $_POST [drink_quantity];
$Breadstick_type = $_POST['breadstick_type'];
$Breadstick_quantity = $_POST [breadstick_quantity];
$Salad = $_POST['salad'];
$Salad_quantity= $_POST [salad_quantity];

$sql = "INSERT INTO order (order_id,customer_name,customer_phone) VALUES('$Order_id','$Customer_name','$Customer_phone');";
$sql = "INSERT INTO pizza (order_id,pizza_id,pizza_type,pizza_size,crust_options,quantity,add_instruct) VALUES('$Pizza_id','$Pizza_type','$Pizza_size','$Crust_options','$Quantity')";
$sql = "INSERT INTO non_pizza (drink_type,drink_quantity,breadstick_type,breadstick_quantity,salad,salad_quantity) VALUES('$Drink_type','$Drink_quantity','$Breadstick_type','$Breadstick_quantity','$Salad','$Salad_quantity')";

//mysqli_query($conn,$sql);
//mysqli_query($conn,$sql1);
if (mysqli_multi_query($GLOBALS['db'], $sql)) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>