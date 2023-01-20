<?php
// Replace with your email address
$to = "sohailaman121@gmail.com";

// Collect form data
$first_name = $_GET['first_name'];
$last_name = $_GET['last_name'];
$company_name = $_GET['company_name'];
$email = $_GET['email'];
$country_code = $_GET['country_code'];
$phone_number = $_GET['phone_number'];
$developer = $_GET['developer'];

// Compose email subject and body
$subject = "New Form Submission";
$body = "First Name: $first_name\n";
$body .= "Last Name: $last_name\n";
$body .= "Company Name: $company_name\n";
$body .= "Email: $email\n";
$body .= "Country Code: $country_code\n";
$body .= "Phone Number: $phone_number\n";
$body .= "Developer: $developer\n";

// Send email
if (mail($to, $subject, $body)) {
    echo "Form submitted successfully.";
} else {
    echo "Error: Form submission failed.";
}
?>