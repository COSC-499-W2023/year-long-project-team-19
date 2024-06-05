<?php 


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
	//CKECK IF USERNAME CLEAN IS A VALID EMAIL
	if (!filter_var($usernameClean, FILTER_VALIDATE_EMAIL)) { //The easiest and safest way to check whether an email address is well-formed 
  		echo "3: Invalid email format, the inputted username is not a valid email address."; //error 3, username clean isn't a valid email address, could be missing the @, or maybe a .com etc.
		exit();
	}
	if (strlen($usernameClean) < 10 || strlen($usernameClean) > 30) //checking the length of the username, AFTER CONFIRMING ITS A VALID EMAIL
	{
		echo "10: The supplied username is not at least 10 characters in length, or it is more than 30."; //error code 10, the supplied username isn't long enough OR ITS TOO LONG
		exit();
	}

	//don't technically need to check against sql inject on the password, since it is never used in a query, just in a crypt function to be compare to the user's hash.
	//TODO *****************************************
	//NEED TO CHECK IF 2nd password matches 1st password, and then maybe check if it contains enough special characters or enough security? Could update a text game object in the scene to tell the user?
	$password = $_POST["password"];
	$password2 = $_POST["password2"];
	if ($password != $password2) //should be same character value and string value, so shouldn't need to do a string compare or anything like that.
	{
		echo "8: The two supplied passwords do not match. Please try again."; //error code 8, the supplied password and the second supplied password do not match either.
		exit();
	}

	if (strlen($password) < 10 || strlen($password) > 30) //checking the length of the password, AFTER CONFIRMING THE TWO PASSES MATCH
	{
		echo "9: The supplied passwords are not at least 10 characters in length, or they are more than 30."; //error code 9, the supplied password isn't long enough OR ITS TOO LONG
		exit();
	}

	//Query to CHECK database for that USERNAME USING THE CLEAN VERSION to avoid sql injection ==============================================
	$namequery = "SELECT useremail, userhash, salt, datecreated, gamesplayed, gameswon, damagedealt FROM useracc WHERE useremail ='" .$usernameClean. "';";

	//RUN the Query 
	$usernameCheck = mysqli_query($con, $namequery) or die("4: Name Check failed."); //error 4 for name check query failed

	//If a user with that username already exists, we can't create the new account, so exit
	if (mysqli_num_rows($usernameCheck) > 0) //counts ROWS specifically
	{
		echo "7: This user ALREADY exists!";//error 7, can't create new user using the same name as another account. (error code 5 is taken by login.php)
		exit();
	}

	//If we got here, the username is unique! So now we need to set up the SALT and HASH for the user's password (More secure to store passwords in our database this way)
	
	//5 rounds=5000 == SHA 256 Encryption (Shifts the inputted characters around 5000 times)
	$salt = "\$5\$rounds=5000\$" . "opensesame" . $usernameClean . "\$";
	//opensesame is a random word that I added to the encryption string to ensure the salt is long enough (needs to be 16 characters at least). Adding username ensures there is some unique chunk of characters in each account's salt

	//Now we make the HASH, which is the encrypted version of the password combined with the SALT
	$hash = crypt($password, $salt);

	//Now we can successfully store all of the new user's info in the databse
	//Query to INSERT USER INFO into useracc ==============================================
	$insertuserquery = "INSERT INTO useracc (useremail, userhash, salt) VALUES ('" .$usernameClean. "', '" .$hash. "', '" .$salt. "');";

	//RUN the INSERT Query 
	mysqli_query($con, $insertuserquery) or die("11: Insert user query failed."); //error 11 for insert user query failed. 

	// Sending email
	$api_key = 'api-B7913C7CCB2948FCA5699B60C6EF2626'; 

	// Extract the part before the '@'	
	$partBeforeAt = strstr($usernameClean, '@', true);

	// Email data
	$input_data = [
		'api_key' => $api_key,
		'sender' => 'colorbreak@mail.com',
		'to' => [$usernameClean],
		'subject' => 'Welcome to Color Break!',
		'html_body' => '<h1>' . 'Hi ' . $partBeforeAt . '.<br><br>Welcome to Color Break.<br><br> Happy Gaming!</h1>',
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

	curl_close($ch);

	//if we get here, then the user WAS CREATED SUCCESSFULLY, so we need to echo a message supplying Unity all the user info (readInput.cs) to achieve LOGGED IN
	echo "0\t" . date("Y/m/d") . "\t0\t0\t0\t";
	//send todays date (not sure how to calculate this in php), then send 0 for gamesplayed, 0 for games won, and 0 for damagedealt ratio ALL SEPERATED BY TABS

	//output response
	if ($response === false) {
		echo 'Error making API call: cURL error - ' . curl_error($ch);
	} else {
		echo 'API Response: ' . $response . PHP_EOL;
	}

?>
