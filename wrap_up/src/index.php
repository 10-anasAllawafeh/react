<?php
header("Access-Control-Allow-Origin: *");
$dsn='mysql:host=localhost;dbname=react';

try {
    $db=new PDO($dsn,'root','');
    // print('connected');
} catch (PDOException $er) {
    echo 'Not connected , Error: '.$er->getMessage();
}



if (isset($_REQUEST['name'])) {
    $name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$age=$_REQUEST['age'];
    $insert=$db->prepare("INSERT INTO user (name,email,age) VALUES('$name','$email','$age')");
    $insert->execute();
}
else{
    $statement=$db->prepare('SELECT * FROM user');
    $statement->execute();
    $data=$statement->fetchAll(PDO::FETCH_ASSOC);
    $json=json_encode($data);
    var_dump($data);
}



// $server="localhost";
// $dbusername="root";
// $password="";
// $database="react";

// $con=mysqli_connect($server,$dbusername,$password,$database);

// if(!$con){
//     die("connection feild: ".mysqli_connect_error());
// }

// $sql="select * from user";

// $result=mysqli_query($con,$sql);
// // var_dump($result);

// if(!$result){
//     http_response_code(404);
//     die(mysqli_error($con));
// }
// for($i=0;$i<mysqli_num_rows($result);$i++){
//     echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
// }


?>