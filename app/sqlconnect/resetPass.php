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

    $token = bin2hex(random_bytes(16));

    $token_hash = hash("sha256", $token);

    $expiry = date("Y-m-d H:i:s", time() + 60 * 30);

    // $mysqli = require __DIR__ . "/database.php";

    $sql = "UPDATE user
            SET reset_token_hash = ?,
                reset_token_expires_at = ?
            WHERE username = ?";

    $stmt = $mysqli->prepare($sql);

    $stmt->bind_param("sss", $token_hash, $expiry, $username);

    $stmt->execute();

	$stmt->bind_param("sss", $token_hash, $expiry, $email);

	$stmt->execute();
?>