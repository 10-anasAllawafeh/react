<?php
// include_once "./connection.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$dsn='mysql:host=localhost;dbname=seaneighbor';

try {
    $db=new PDO($dsn,'root','');
    // echo 'connected';
} catch (PDOException $err) {
    echo "error accoured, erros message is :". $err->getMessage();
}

$email=$_REQUEST['email'];
$pass=$_REQUEST['pass'];

$read=$db->prepare("SELECT * FROM users WHERE email='$email' AND pass='$pass'");
$read->execute();
$info=$read->fetch(PDO::FETCH_ASSOC);
print_r(json_encode($info));



// $sql = "select * from users";
// $result = mysqli_query($con, $sql);

// if(!$result){
//     http_response_code();
//     die(mysqli_error($con));
// }






// echo($i>0?',':'').json_encode(mysqli_fetch_assoc($result));
// }

?>