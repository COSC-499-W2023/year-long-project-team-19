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
	$password = $_POST["password"];


	//Query to CHECK database for that USERNAME ==============================================
	$namequery = "SELECT useremail, hash, salt, datecreated, gamesplayed, gameswon, damagedealt FROM useracc WHERE useremail ='" .$username. "';";

	//RUN the Query 
	$usernameCheck = mysqli_query($con, $namequery) or die("2: Name Check failed."); //error 2 for name check query failed

	//If a user with that username already exists, we can't create the new account, so exit
	if (mysqli_num_rows($usernameCheck) > 0) //counts ROWS specifically
	{
		echo "3: This user ALREADY exists!";
		exit();

	}

	//If we got here, the username is unique! So now we need to set up the SALT and HASH for the user's password (More secure to store passwords in our database this way)
	
	//5 rounds=5000 == SHA 256 Encryption (Shifts the inputted characters around 5000 times)
	$salt = "\$5\$rounds=5000\$" . "opensesame" . $username . "\$";
	//opensesame is a random word that I added to the encryption string to ensure the salt is long enough (needs to be 16 characters at least). Adding username ensures there is some unique chunk of characters in each account's salt

	//Now we make the HASH, which is the encrypted version of the password combined with the SALT
	$hash = crypt($password, $salt);

	//Now we can successfully store all of the new user's info in the databse
	//Query to INSERT USER INFO into useracc ==============================================
	$insertuserquery = "INSERT INTO useracc (useremail, hash, salt) VALUES ('" .$username. "', '" .$hash. "', '" .$salt. "');";

	//RUN the INSERT Query 
	mysqli_query($con, $insertuserquery) or die("4: Insert user query failed."); //error 4 for insert user query failed

	//if we get here, then the user WAS CREATED SUCCESSFULLY, so we need to echo a message supplying Unity all the user info (readInput.cs) to achieve LOGGED IN
	echo "0\t" . date("Y/m/d") . "\t0\t0\t0\t";
	//send todays date (not sure how to calculate this in php), then send 0 for gamesplayed, 0 for games won, and 0 for damagedealt ratio ALL SEPERATED BY TABS


?>
