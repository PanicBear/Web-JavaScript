<?php
$dl = new DateTime;
$dl ->setTimezone(new DateTimezone($_POST['timezone']));
echo $dl->format($_POST['format']);
?>