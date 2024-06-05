# Color Break Capstone Project

## Game Over Scene

This scene controls the end of game event. Displays a end game screen with a button to go back to the Main Menu scene.
This scene contains one script (gameOver.cs) which controls the UI elements of the scene and the assignment of stat variables. The script sends those variables via a form to gameOver.php which recieves the values and updates them in the SQL table. 
The variables are set in the shareVarManager.cs script via syncvar which are initiliazed in the DeductHealth() function which calls the TriggerGameOver() function which determines the winner, sends the stats the the gameOver.cs script and loads the Game Over scene.

## Team 19 Members: 
<ul>
<li>aditya39p</li>
<li>dika2706</li>
<li>HenryAugustiano</li>
<li>lhenon99</li>
<li>Prelude14</li>
</ul>
