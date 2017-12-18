<?php

//$url = $_POST['url'];
$url = 'http://www.santafe.gob.ar';
//$url='http://www.google.com';
//   $url='http://www.santafe.gob.ar/wifipublica';
$ip = $_SERVER['REMOTE_ADDR'];

$conexion = mysql_connect("localhost", "squid", "squid");
mysql_select_db("squid", $conexion);
$sql = "INSERT INTO sesiones (ip,enabled) VALUES ('" . $ip . "',1);";
mysql_query($sql);
mysql_close($conexion);

$loc = "Location:" . $url;

header($loc);
?>
