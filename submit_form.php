<?php
$to = "Info@yourcodingteam.com";

// Collect form data
$first_name = $_POST['First Name'];
$last_name = $_POST['Last Name'];
$company_name = $_POST['Company Name'];
$email = $_POST['Email'];
$country_code = $_POST['Country Code'];
$phone_number = $_POST['Phone Number'];
$developer = $_POST['developer'];

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