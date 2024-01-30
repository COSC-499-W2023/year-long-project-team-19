<?php 
	$con = mysqli_connect("localhost", "root2", "Cosc499Team19DuelTimejkwndjfifi", "cosc499");

	//check connection
	if (mysqli_connect_errno()) 
	{
		echo "1:Connection failed."; //connection failed
		exit();
	}

	//grab unity's values that it sent, and store in local variable to be queried in our database
	$username = $_POST["username"];

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

	debug.log($username);

	//Query to check database for that USERNAME,
	$namequery = "SELECT useremail FROM useracc WHERE useremail ='" .$username. "';";

	//Run the Query 
	$usernameCheck = mysqli_query($con, $namequery) or die("2: Name Check failed."); //error 2 for name check query failed

	//if there is NO account matching that username, OR there is MORE THAN 1, then something is wrong and we want to quit
	if (mysqli_num_rows($usernameCheck) != 1) //specifically counts ROWS
	{
		echo "5: 0 or more than 1 user was found with that username."; //error code 5, there is either no account with that name, or there is more than one matching somehow
		exit();
	}

    // $token = bin2hex(random_bytes(16));

    // $token_hash = hash("sha256", $token);

    // $expiry = date("Y-m-d H:i:s", time() + 60 * 30);

    // $sql = "UPDATE useracc
    //         SET reset_token_hash = ?,
    //             reset_token_expires_at = ?
    //         WHERE username = ?";

    // $stmt = $mysqli->prepare($sql);

    // $stmt->bind_param("sss", $token_hash, $expiry, $username);

    // $stmt->execute();

	// $stmt->bind_param("sss", $token_hash, $expiry, $email);

	// $stmt->execute();
?>