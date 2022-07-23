<?php
include_once "./connection.php";

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$pass = $_REQUEST['pass'];
$phone = $_REQUEST['phone'];





$sql = "INSERT INTO users(name, email, phone, pass) VALUES('$name', '$email', '$phone', '$pass')";

mysqli_query($con,$sql);

$con->close();

?>