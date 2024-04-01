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
	$namequery = "SELECT useremail, salt, userhash FROM useracc WHERE useremail ='" .$username. "';";

	//Run the Query 
	$usernameCheck = mysqli_query($con, $namequery) or die("2: Name Check failed."); //error 2 for name check query failed

	//if there is NO account matching that username, OR there is MORE THAN 1, then something is wrong and we want to quit
	if (mysqli_num_rows($usernameCheck) != 1) //specifically counts ROWS
	{
		echo "5: 0 or more than 1 user was found with that username."; //error code 5, there is either no account with that name, or there is more than one matching somehow
		exit();
	}

	$useraccInfo = mysqli_fetch_assoc($usernameCheck); 
	$salt = $useraccInfo["salt"]; //get salt from DB
	$userhash = $useraccInfo["userhash"]; //get salt from DB

	//check supplied password combined with DB's salt 
	$newHash = crypt($password, $salt);

	if ($userhash == $newHash){
		echo "99: User is trying to reset the same password twice"; 
		exit();
	}

    //Updating password in database
    $updatePassQuery = "UPDATE useracc SET 'hash'= '$newHash' WHERE useremail = '$username'";

    if ($con->query($updatePassQuery)) {
        echo "0: Password Update successful!";
    } else {
        echo "1: Password Update failed: " . $con->error;
    }