<?php 

	// error_reporting(E_ALL);
	// ini_set('display_errors', 1);

	$con = mysqli_connect("localhost", "root2", "Cosc499Team19DuelTimejkwndjfifi", "cosc499");

	if (mysqli_connect_errno()) 
	{
		echo "1:Connection failed."; 
		exit();
	}

	$username = mysqli_real_escape_string($con, $_POST["username"]);
	$result = $_POST["result"];
	$damage = $_POST["damageDealt"];
	
	if ($result == 'w'){
		$updateStats = "UPDATE useracc SET gamesplayed = gamesplayed + 1, gameswon = gameswon + 1, damagedealt = damagedealt + $damage WHERE useremail = '$username'";
	} else if ($result == 'l'){
		$updateStats = "UPDATE useracc SET gamesplayed = gamesplayed + 1, damagedealt = damagedealt + $damage WHERE useremail = '$username'";
	}
	
	$updateStats = mysqli_query($con, $updateStats) or die("2: Update failed."); 
	
	echo "0";