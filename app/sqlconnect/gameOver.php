<?php 

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

$con = mysqli_connect("localhost", "root2", "Cosc499Team19DuelTimejkwndjfifi", "cosc499");

if (mysqli_connect_errno()) 
{
	echo "1: Connection failed."; 
	exit();
}

$username = mysqli_real_escape_string($con, $_POST["username"]);
$result = $_POST["result"];
$damage = $_POST["damageDealt"];

// Check if the result is either 'w' or 'l'
if ($result != 'w' && $result != 'l'){
	echo "3: Invalid result.";
	exit();
}

// Prepare the SQL statement to avoid SQL injection.
if ($result == 'w'){
	$updateStats = $con->prepare("UPDATE useracc SET gamesplayed = gamesplayed + 1, gameswon = gameswon + 1, damagedealt = damagedealt + ? WHERE useremail = ?");
	$updateStats->bind_param("is", $damage, $username);
} else {
	$updateStats = $con->prepare("UPDATE useracc SET gamesplayed = gamesplayed + 1, damagedealt = damagedealt + ? WHERE useremail = ?");
	$updateStats->bind_param("is", $damage, $username);
}

if ($updateStats->execute()) {
	echo "0"; // Success
} else {
	echo "2: Update failed."; // Failure
}

$updateStats->close();
$con->close();

