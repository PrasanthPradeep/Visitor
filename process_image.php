<?php
require_once('phpmailer/PHPMailerAutoload.php');

// Get the image data URL from the front-end
$image_data_url = $_POST['image_data_url'];

// Remove the data URI scheme prefix from the image data URL
$image_data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $image_data_url));

// Create a new PHPMailer instance
$mail = new PHPMailer;

// Set up the email parameters
$mail->isSMTP();
$mail->Host = 'smtp.example.com'; // Your SMTP server host
$mail->SMTPAuth = true;
