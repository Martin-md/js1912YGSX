<?php

include "connlogin.php";
echo json_encode(1363);
if(isset($_POST['user']) && isset($_POST['pass'])){
    echo json_encode(123);
    $user=$_POST['user'];
    $pass=$_POST['pass'];

    $result=$conn->query("select * from loginYGSX where username='$user' and password='$pass' ");

    if($result->fetch_assoc()){//匹配
        echo true;
     
    }else{//不匹配
        echo false;
    }

}