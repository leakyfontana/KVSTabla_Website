<?php 
if(isset($_POST['submit'])){
    $to = "kvstabla@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $event = $_POST['event'];
    $location = $_POST['location'];
    $details = $_POST['details'];

    $subject = " New KVSTabla booking request";
    $subject2 = "Copy of your request to book KVSTabla";
    $message = $first_name . " " . $last_name . " has requested to book you for a " . $event . " in the " . $location . " area." . "\n\n Additional details: " . $details;
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $message;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly!";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>