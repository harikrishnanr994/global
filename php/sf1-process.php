<?php
$name = $_POST["sf1Name"];
$email = $_POST["sf1Email"];
$phone_number = $_POST["sf1PhoneNum"];

$EmailTo = "phacsindevs@gmail.com";
$Subject = "Message from " . $name;

// prepare email body text
$Body = "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Phone Number: ";
$Body .= $phone_number;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>
