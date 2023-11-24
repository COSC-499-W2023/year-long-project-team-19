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


	//Query to check database for that USERNAME ==============================================
	$namequery = "SELECT useremail FROM useracc WHERE useremail ='" .$username. "';";


	//Run the Query 
	$usernameCheck = mysqli_query($con, $namequery) or die("2: Name Check failed."); //error 2 for name check query failed

	if (mysqli_num_rows($usernameCheck) > 0)
	{
		echo "This user exists!";

		//Query to check database for that PASSWORD ==============================================
		$passquery = "SELECT userpass FROM useracc WHERE useremail ='" .$username. "';";


		//Run the Query 
		$userPassCheck = mysqli_query($con, $passquery) or die("3: Pass Check failed."); //error 3 for pass check query failed

		if (mysqli_num_rows($userPassCheck) > 0){
			echo "This user's password exists!";

			echo("0");
		}
	}




?>