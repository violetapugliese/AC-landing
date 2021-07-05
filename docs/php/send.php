<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$messagge = $_POST['name'];

echo $name. " dice:<br/>".$messagge; 
if(mail('violeta.pugliese@gmail.com', $name, $messagge)){
    echo "mail enviado";
}else{
    echo "su mail no ha sido enviado";
}
?>