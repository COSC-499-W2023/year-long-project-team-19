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


	//Query to check database for that USERNAME, then its password and other info ==============================================
	$namequery = "SELECT useremail, hash, salt, datecreated, gamesplayed, gameswon, damagedealt FROM useracc WHERE useremail ='" .$username. "';";
    //win loss ratio might need to be caluclated (not stored in table?)

	//Run the Query 
	$usernameCheck = mysqli_query($con, $namequery) or die("2: Name Check failed."); //error 2 for name check query failed

	//if there is NO account matching that username, OR there is MORE THAN 1, then something is wrong and we want to quit
	if (mysqli_num_rows($usernameCheck) != 1) //specifically counts ROWS
	{
		echo "5: 0 or more than 1 user was found with that username."; //error code 5, there is either no account with that name, or there is more than one matching somehow
		exit();
	}
	//Need to check salt and hash with supplied PASSWORD to check if correct ==============================================
	$useraccInfo = mysqli_fetch_assoc($usernameCheck); //get query info as associative array 
	$salt = $useraccInfo["salt"]; //get salt from DB
	$hash = $useraccInfo["hash"]; //get hash from DB

	//check supplied password combined with DB's salt 
	$loginhash = crypt($password, $salt);

	//now check this supplied salt pass against DB's hash
	if ($hash != $loginhash) 
	{
		echo "6: Incorrect password"; //error code 6, the supplied password combined with the salt in the DB does not equal the hash in the DB, so it is incorrect
		exit();
	}

	//if we get here, then the user logged in perfectly, so we need to echo a message supplying Unity all the user info (readInput.cs)
	echo "0\t" . $useraccInfo["datecreated"] . "\t" . $useraccInfo["gamesplayed"] . "\t" . $useraccInfo["gameswon"] . "\t" . $useraccInfo["damagedealt"];
	//win loss ratio might need to be caluclated (not stored in table?)

?>
