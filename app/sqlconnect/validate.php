<?php 

	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	$con = mysqli_connect("localhost", "root2", "Cosc499Team19DuelTimejkwndjfifi", "cosc499");

	//check connection
	if (mysqli_connect_errno()) 
	{
		echo "1:Connection failed."; //connection failed
		exit();
	}

	//grab unity's values that it sent, and store in local variable to be queried in our database
	// $username = $_POST["username"];
	// $token = $_POST["token"];

	$username = "john@doe.com";
	$token = "13af6162";
    // This is the password entered by the user during login

	//Query to check database for that USERNAME, then its password and other info
	$getToken = "SELECT useremail, reset_token_hash, salt FROM useracc WHERE useremail ='" .$username. "';";

	//Run the Query 
	$getTokenQuery = mysqli_query($con, $getToken) or die("2: Validation failed."); 

    //get hash token from db and hash the input token
	$useraccInfo = mysqli_fetch_assoc($getTokenQuery); 
	$token_db = $useraccInfo["reset_token_hash"]; 
	$salt = $useraccInfo["salt"]; 

	$token_hash = crypt($token, $salt);

	// if (password_verify($token_hash, '13af6162')) {
	// 	echo "same";
	// } else {
	// 	echo "not same";
	// }

	if ($token_hash != $token_db) 
	{
		echo "6: not the same."; 
	}


	echo $token; 

	echo '<br>' .$token_hash;

	echo '<br>' .$token_db;

	echo "0\t";
