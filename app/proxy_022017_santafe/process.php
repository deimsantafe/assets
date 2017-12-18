<?php

$url = 'https://www.santafe.gob.ar';

//$ip = $_SERVER['REMOTE_ADDR'];
$ip = filter_input(INPUT_SERVER, 'REMOTE_ADDR', FILTER_SANITIZE_STRING);

$conexion = mysql_connect("localhost", "squid", "squid");
mysql_select_db("squid", $conexion);
$sql = "INSERT INTO sesiones (ip,enabled) VALUES ('" . $ip . "',1);";
mysql_query($sql);
mysql_close($conexion);

$loc = "Location:" . $url;
header($loc);