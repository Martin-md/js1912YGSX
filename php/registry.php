<?php

include "connlogin.php";


echo json_encode(456);
if(isset($_POST['submit'])){
    $username=$_POST['username'];
    $password=sha1($_POST['password']);//后端加密
    $email=$_POST['email'];
    echo json_encode(123);
    $conn->query("insert loginYGSX values(null,'$username','$password','$email') ");
    header('location:http://10.31.152.53/martin/js1912YGSX/src/login.html');//php页面的跳转。
}