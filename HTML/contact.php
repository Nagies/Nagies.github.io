<?php

$to = 'example@example.com'; // YOUR EMAIL

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$headers = "From: ".$email." \r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);
?>