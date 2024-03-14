<?php
	/*
	create a hash token, saved in db and emailed.
	*/
	
	$con = mysqli_connect("localhost", "root2", "Cosc499Team19DuelTimejkwndjfifi", "cosc499");

	//check connection
	if (mysqli_connect_errno()) 
	{
		echo "1:Connection failed."; //connection failed
		exit();
	}

	// ini_set('display_errors', 1);
	// error_reporting(E_ALL);

	$username = $_POST["username"];

	// $username = "john@doe.com";

	$getSalt = "SELECT salt FROM useracc WHERE useremail ='" .$username. "';";

	$getSaltQuery = mysqli_query($con, $getSalt) or die("2: Validation failed: Email is not registered.");  

	$token = bin2hex(random_bytes(4));

	$useraccInfo = mysqli_fetch_assoc($getSaltQuery); 
	$salt = $useraccInfo["salt"]; 

    $token_hash = crypt($token, $salt);

	//Updating token in database
	$updateTokenQuery = "UPDATE useracc SET reset_token_hash = '$token_hash' WHERE useremail = '$username'";

	if ($con->query($updateTokenQuery)) {
		echo "0: Update successful!";
	} else {
		echo "1: Update failed: " . $con->error;
	}

	// Sending email
	$api_key = 'api-B7913C7CCB2948FCA5699B60C6EF2626'; 

	// Email data
	$input_data = [
		'api_key' => $api_key,
		'sender' => 'colorbreak@mail.com',
		'to' => [$username],
		'subject' => 'Password Reset Verification Email',
		'html_body' => '<h1>' . $token . ' is your reset code.<br>It will expire after 30 minutes.</h1>',
		'text_body' => 'Test',
	];

	$json_data = json_encode($input_data);

	$ch = curl_init('https://api.smtp2go.com/v3/email/send');

	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Content-Type: application/json',
		'accept: application/json',
	]);

	$response = curl_exec($ch);

	//output response
	if ($response === false) {
		echo 'Error making API call: cURL error - ' . curl_error($ch);
	} else {
		echo 'API Response: ' . $response . PHP_EOL;
	}

	curl_close($ch);
