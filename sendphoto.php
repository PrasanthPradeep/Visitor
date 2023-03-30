<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['photo'])) {
    // Get the photo data URI from the POST data
    $photoDataURI = $_POST['photo'];

    // Remove the "data:image/png;base64," prefix from the data URI
    $photoData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $photoDataURI));

    // Set the email recipient and subject
    $to = 'programmerprasanth@gmail.com';
    $subject = 'New photo from website visitor';

    // Set the email headers
    $headers = array();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=UTF-8';
    $headers[] = 'From: sender@example.com';

    // Attach the photo as a file to the email
    $attachment = array(
        'content' => $photoData,
        'mime' => 'image/png',
        'name' => 'photo.png',
    );

    // Send the email with the photo attachment
    if (mail($to, $subject, '', $headers, array($attachment))) {
        echo 'Photo sent successfully';
    } else {
        echo 'Error sending photo';
    }
} else {
    echo 'Invalid request';
}
?>
