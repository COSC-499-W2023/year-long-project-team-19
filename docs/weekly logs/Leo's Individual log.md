<h1>Date Range: 26-09-2023 to 01-10-2023</h1>
<img src = "https://github.com/COSC-499-W2023/year-long-project-team-19/blob/development/docs/weekly%20logs/log_imgs/Leo_log_Week4.png"/>

## Which features were yours in the project plan for this milestone?

Figuring out the work distribution and finalizing the table and description. Figuring out the milestones, setting up Unity, and completeing the weekly logs.

## Which tasks from the project board are associated with these features?

<ol>
  <li>"Project Plan Document"</li>
  <li>"Set up Unity"</li>
  <li>"Individual Logs" </li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

All tasks were completed this week.

<h1>Date Range: 8-10-2023 to 15-10-2023</h1>

<img src = "https://github.com/COSC-499-W2023/year-long-project-team-19/blob/development/docs/weekly%20logs/log_imgs/Leo_log_Week6.png"/>

## Which features were yours in the project plan for this milestone?

Exploration, Setting up Unity on my computer, and completing the weekly logs.

## Which tasks from the project board are associated with these features?

<ol>
  <li>"Exploration: Leo"</li>
  <li>"Set up Unity"</li>
  <li>"W6 Individual Logs"</li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

Completed: I setup a local unity project, and my individual log.

In progress: I am still working on setting up a Unity project in github.

<h1>Date Range: 15-10-2023 to 22-10-2023</h1>

<img src = "https://github.com/COSC-499-W2023/year-long-project-team-19/blob/development/docs/weekly%20logs/log_imgs/Leo_log_Week7.png"/>

## Which features were yours in the project plan for this milestone?

Exploration on Unity and completing the weekly logs.

## Which tasks from the project board are associated with these features?

<ol>
  <li>"Exploration: Leo"</li>
  <li>"W7 Team Log"</li>
  <li>"W7 Individual Logs"</li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

Completed: W6 Team Log and Individual Logs. Have created a test Unity project on github

In Progress: "Followed tutorials on getting started with Unity, exploring basic class structure, and hosting a Unity project locally. Currently doing rsearch on building multiplayer games; creating a server with Photon and connecting it with Unity projects. I've also looked into setting up a database and how we would create and store playing cards, and creating a login system in Unity using PHP and MySQL. My goal for following week is to create a simple mockup game that will run on a local server.

# Date Range: 29-10-2023 to 05-11-2023

<img src = "log_imgs/Leo_log_Week9.png?raw=true"/>

## Which features were yours in the project plan for this milestone?

Completing the Mini Presentation Slides and working on exploration with unity.

## Which tasks from the project board are associated with these features?

<ol>
  <li>"Mini Presentation Slides"</li>
  <li>"Exploration: Leo"</li>
  <li>"W9 Individual Logs"</li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

### Completed:

<li>"Mini Presentation Slides"</li>
<li>"W9 Individual Logs"</li>

### In Progress:

Focused mostly on the presentation for this week, but I am still working on learning Unity.

# Date Range: 05-11-2023 to 12-11-2023

<img src = "log_imgs/Leo_log_Week9.png?raw=true"/>

## Which features were yours in the project plan for this milestone?

Working on testing for the login system.

## Which tasks from the project board are associated with these features?

<ol>
  <li>"Password Encryption"</li>
  <li>"Password reset system"</li>
  <li>"Login Database testing"</li>
  <li>"Login format testing"</li>
  <li>""</li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

### In Progress:

Still working on writing tests for the login system to check password and user formats. Once the login database is setup, I can start writing test for that and start working on password encryption with Brenner.

# Date Range: 27-11-2023 to 3-12-2023

<img src = "log_imgs/Leo_log_W13.png?raw=true"/>

## Which features were yours in the project plan for this milestone?

Working on on password reset system and on adding a settings menu

## Which tasks from the project board are associated with these features?

<ol>
  <li>Password reset system</li>
  <li>settings menu</li>
  <li>Team log</li>
  <li>Individual log</li>
</ol>

### Completed

Added an audio settings menu with volume control and toggles for volume and sound effects. I added game music that can be controlled in audio settings. As well as the UI for Video settings with a brightness slider that will be implemented to change brightness level in game. 

Added two password reset interfaces. One for guest which has an input field for an email and one for logged in user which just takes their email and sends it to a php script which checks that the email is found and then creates a reset token which is saved in the database. The end of the script sends an email to the user with their reset token.

Ive also added the UI for the user to type in their reset token and their new password. But I still need to finish the script to check the input token and update the password.  

### In progress

Working on settings to user database settings so that they are saved when the user logs in. 

<img src = "log_imgs/leo_log_img5.png?raw=true"/>

<img src = "log_imgs/leo_log_img1.png?raw=true"/>

<img src = "log_imgs/leo_log_img2.png?raw=true"/>

<img src = "log_imgs/leo_log_img3.png?raw=true"/>

<img src = "log_imgs/leo_log_img4.png?raw=true"/>


# Date Range: 15-01-2024 to 21-01-2024

<img src = "log_imgs/Leo_log_T2W2.png?raw=true"/>

## Which features were yours in the project plan for this milestone?

Working on populating the game decks based on players' selection.

## Which tasks from the project board are associated with these features?

<ol>
  <li>Populate card decks</li>
</ol>

### Completed

Added feature which lets the player select one of four decks of cards based on its colour. Wrote a script that passes the right cards based on our card design  document so that the chosen decks are delt out to each player at the start of the game.

### In progress

The script is hardcoded for each group of cards as our card database is not yet setup. The goal is to change it to pull the cards from the database. I a also am still working on writing automated tests for this feature. 

# Date Range: 22-01-2024 to 28-01-2024

<img src = "log_imgs/Leo_log_T2W3.png?raw=true"/>

## Which features were yours in the project plan for this milestone?

Working on populating the game decks based on players' selection and on fixing and improving the login system.

## Which tasks from the project board are associated with these features?

<ol>
  <li>Populate card decks</li>
  <li>Login system</li>
</ol>

### Completed

Merged the deck select scene with the latest game updates using Brenner's update of the card database and fixed errors with card counts and outputted cards. Seems like Brenner pulled my work from last week into the DesignVideoDemo branch and we sort of worked on the same thing for the card output so I have not made a PR for that. My commits would be on the deckSelectScene for last week and deckSelectUI for this week. Then I worked on the login system, I updated the readInput script so that the page redirects to the main menu affter the user is logged in. I also added a error message for when incorrect login information is submitted. This is on the login-system PR. (on the game dev repository: https://github.com/Prelude14/499UnityGameT19)

### In progress

I am working on updating the reset password feature so that we can test sending a reset token and update the account password on the database. 
