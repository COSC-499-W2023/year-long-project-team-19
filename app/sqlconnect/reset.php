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

	$username = mysqli_real_escape_string($con, $_POST["username"]); //real escape string is built in sql injection checker, will strip any sql commands out
	//going to create a second username variable to further filter the user's inputted username to avoid sql injection
	$usernameClean = filter_var($username, FILTER_SANITIZE_EMAIL); //remove all illegal characters from the email address (filter_var() is built in php function)
	//was using filter sanitize string, with filter flag strip low and high to take out any characters from the username that aren't just the standard ASCII text characters (values 0-32 is special--the 
	//low strip takes these out, and any above 128 is special as well, so the strip high takes care of these) before, but filter_sanitize_email seems better

	//CHECK IF USERNAME CLEAN MATCHES USERNAME TO RETURN ERROR CODE
	if ($username != $usernameClean) {
		echo "2: The inputted username contains some prohibitted characters, possibly some sql code.";//error 2, the usernameClean doesn't match the entered username, 
		//so we exit before the sql query, as to avoid sql injection
		exit();
	}

	$namequery = "SELECT useremail, reset_token_hash FROM useracc WHERE useremail ='" .$usernameClean. "';";

	$usernameCheck = mysqli_query($con, $namequery) or die("4: Name Check failed."); //error 4 for name check query failed

	$token = bin2hex(random_bytes(4));

    $token_hash = hash("sha256", $token);

	$insertTokenQuery = "UPDATE useracc SET reset_token_hash='" .$token_hash. "' WHERE useremail ='" .$usernameClean. "';";

	mysqli_query($con, $insertTokenQuery) or die("11: Insert user query failed.");

	echo "0\t";

	// Sending email
	$api_key = 'api-B7913C7CCB2948FCA5699B60C6EF2626'; 

	echo $token;

	// Email data
	$input_data = [
		'api_key' => $api_key,
		'sender' => 'colorbreak@mail.com',
		'to' => [$usernameClean],
		'subject' => 'Password Reset Verification Email',
		'html_body' => '<h1>' . $token . ' is your reset code.<br>It will expier after 30 minutes.</h1>',
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
