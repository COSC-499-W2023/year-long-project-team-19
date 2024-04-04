<?php 

error_reporting(E_ALL);
ini_set('display_errors', 1);

$con = mysqli_connect("localhost", "root2", "Cosc499Team19DuelTimejkwndjfifi", "cosc499");

if (mysqli_connect_errno()) 
{
	echo "1: Connection failed."; 
	exit();
}

$username = $_POST["username"];
$result = $_POST["result"];
$damage = $_POST["damage"];

echo "username: " . $username;
echo " result:" . $result;
echo " damage:"  . $damage;

// // Check if the result is either 'w' or 'l'
// if ($result != 'w' && $result != 'l'){
// 	echo "3: Invalid result.";
// 	exit();
// }

// // Prepare the SQL statement to avoid SQL injection.
// if ($result == 'w'){
// 	$updateStats = $con->prepare("UPDATE useracc SET gamesplayed = gamesplayed + 1, gameswon = gameswon + 1, damagedealt = damagedealt + ? WHERE useremail = ?");
// 	$updateStats->bind_param("is", $damage, $username);
// } else {
// 	$updateStats = $con->prepare("UPDATE useracc SET gamesplayed = gamesplayed + 1, damagedealt = damagedealt + ? WHERE useremail = ?");
// 	$updateStats->bind_param("is", $damage, $username);
// }

if ($result == 'w'){
	$updateStats = "UPDATE useracc SET gamesplayed = gamesplayed + 1, gameswon = gameswon + 1, damagedealt = damagedealt +  '".$damage. "'WHERE useremail = '".$username."'";
}
else {
	$updateStats = "UPDATE useracc SET gamesplayed = gamesplayed + 1, damagedealt = damagedealt + '".$damage. "' WHERE useremail = '".$username."'";
}

if ($con->query($updateStats)) {
	echo "0"; 
} else {
	echo "2: Update failed."; 
}

$con->close();

