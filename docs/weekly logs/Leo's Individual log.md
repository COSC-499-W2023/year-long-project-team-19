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

# Date Range: 22-01-2024 to 28-01-2024 - W3

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

# Date Range: 28-01-2023 to 04-03-2023 - W4

<img src = "log_imgs/Leo_log_T2W4.png?raw=true"/>

## Which tasks from the project board are associated with these features?

<ol>
  <li>Login System</li>
  <li>Password reset</li>
  <li>Peer Testing Heurestic evluation</li>
  <li>Populate card decks</li>
  <li>"T2 W4 Individual Logs"</li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

I worked on on the reset password reset system at the start of the week and was able to send and retrieve a hashed token to the database but struggled for quite a while tyring to get the mailer function to work. I moved on as this is a feature we had planned for the next peer testing session.

There was a bug in the login system which didn't show the users info right away after logging in. I added a confirm button which lets the user know that they have logged in successfully and fixes the login bug. I did the same for the create account function, added error message aswell and fixed some of the input errors.

<img src = "log_imgs/Leo_T2W4_s2.png?raw=true"/>

There also had a bug with displaying the users stats which was quite tought to firgure out. I added descriptions of the card decks on the deck select page.

<img src = "log_imgs/Leo_T2W4_s1.png?raw=true"/>

Worked on the Heureustic evaluation task list and questionnaire. While going through all the tasks, there ended being a few bugs that we had to fix. There was some problems with the audio settings, login input, some text coloring, highlighting of the cards and a few issues with merging everyone features together.

# Date Range: 11-02-2023 to 18-02-2023 - W6

<img src = "log_imgs/Leo_log_T2W6.png?raw=true"/>

## Which tasks from the project board are associated with these features?

<ol>
  <li>Login System</li>
  <li>Password reset</li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

In the last week Ive added some updates to the login system based on feedback from the peer testing to make it more straightforward for the user. I changed the required password lenght to 8 characters and added a message and red text when the user the account creation or login fails so that the user doesn't have to back to main menu everytime.

<img src = "log_imgs/Leo_T2W6_s2.png?raw=true"/>

<img src = "log_imgs/Leo_T2W6_s1.png?raw=true"/>

In progress : Our database connection uses a WWW request, which causes unity to output a warning saying "WWW is obselete, use UnitywebRequest". We believe some of our server issues have come from this. I have been looking into fixing this issue and replacing our current script with UnityWebRequest, however I have had some troubles getting that to work and still need to do some more research on this issue.

I also am still working on getting the password reset feature to be fully operational and test it an email output. Getting the mailer class working anf fixing the token input script has also caused me some issues, so I will try to get that working through the reading break.

# Date Range: 18-02-2024 to 03-03-2024 - W7 to W8

<img src = "log_imgs/Leo_log_Week8.png?raw=true"/>

## Which tasks from the project board are associated with these features?

<ol>
  <li>Login System</li>
  <li>Password reset</li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

### Reading break week: 

I managed to get a lot of progress on the password reset system during the break. I set up a smtp server using SMTP2GO and a email sender domain using mail.com. I added to the SMTP2GO API to the reset script which now sends the reset token by email. 

<img src = "log_imgs/leo_T2W8_s1.png?raw=true"/>

I added a validate script which runs when the user inputs their token and hits the validate button in the game menu. It connects to the db and retrieves the user's password salt, it hashes the inputted token and compares it with the hashed token in the database. I ran into a problem with the tokens not matching up even though they were getting hashed correctly. I was stuck on this issue for a while. 

### This week: 

After a lot of debugging and some help I finally figured out the issue with the tokens. I fixed the validate script and am working on new a script to recieve the new password input and change it in the database. Once that is done I plan on writing tests for these features. I would also like to implement the password reset feature to the guest menu and recieve an email input from the user so that the password can be reset without being logged in before the peer review session next week. 

Draft PRs:
(https://github.com/Prelude14/499UnityGameT19/pull/6).
(https://github.com/COSC-499-W2023/year-long-project-team-19/pull/152).

# Date Range: 03-03-2024 to 10-03-2024 - W9

<img src = "log_imgs/Leo_log_T2W9.png?raw=true"/>

## Which tasks from the project board are associated with these features?

<ol>
  <li>Heuristic Evaluation</li>
  <li>Password reset</li>
  <li>login System</li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

At the start of the week, I finally finished the new password input script and php file, and added error messages for each stage of the password reset process. There was a couple of issues with the SQL query for updating passwords which took an unexpected amount of time to figure out. One issue was that the hash exceeded the database attribute's length capacity. Another issue was the use of 'hash' as a database attribute conflicted with SQL's reserved keywords, which was messing up the password input query. 

Trying to build the latest game version for the peer testing session proved to be very difficult. We had some unity editor version issues with merging my features which took a lot of work to figure out. We ended up having to manually redo all the changes inside unity for it to work properly. Once we resolved that, we found that we couldn't log in with the new password, which took additional troubleshooting. Following this, there was still some conflicts merging all our features together. Fortunatly we got the final build working with all our features ready for peer testing.

Following the peer testing session, I made some updates on the error handling for the password reset, and added masked password input which I forgot to add initially. Then this weekend, I tried to work on updating some of the visual aspects of the game and doing some exploration on how we could improve the Game scene based on feedback from peer testing.

With all these problems to fix along with finishing up all the password reset and login features aswell as preparing for the peer testing, this week required a considerable dedication of time and effort to the project, which is why I feel like I went above and beyond my milestone features.

# Date Range: 10-03-2024 to 17-03-2024 - W10

<img src = "log_imgs/Leo_T2W10.png?raw=true"/>

## Which tasks from the project board are associated with these features?

<ol>
  <li>"Password reset system"</li>
  <li>"Login System Draft"</li>
  <li>"Create Account System Draft"</li>
  <li>"UI Recommendations: Card Ui changes"</li>
  <li>"T2 W10 Individual logs"</li>
</ol>

## Among these tasks, which have you completed/in progress in the last week?

### Completed:

**Improvement to Password Reset and Account Creation**:
  - manually merged multiplayer features with updates from our second round of peer testing.
  - Implemented a double password input with masking to improve security during account creation and password reset.
  - Added confirmation messages specifying the email to which the reset token was sent, including an option to resend the token in case of an error.
  - Updated the account creation script to automatically send a welcome email to new users.
  - Introduced specific error feedback for the create account and reset password scenes, helping users understand the process's failure points.
  - Added a mechanism to prevent users from resetting their password to the previous one.
  - Implemented visual icons next to create and update password inputs, indicating the validity of the password based on our criteria (e.g., length, characters).

<img src = "log_imgs/Leo_logImg_W10_s1.png?raw=true"/>
<img src = "log_imgs/Leo_logImg_W10_s2.png?raw=true"/>
<img src = "log_imgs/Leo_logImg_W10_s4.png?raw=true"/>
<img src = "log_imgs/Leo_logImg_W10_s5.png?raw=true"/>
<img src = "log_imgs/Leo_logImg_W10_s7.png?raw=true"/>

----------------------------------------------------------------
### In Progress:

**Reset Token Timestamp**: 
  - Working on integrating a timestamp system for the password reset feature, which will introduce an expiry time for reset tokens and a cooldown period for reset requests. I havent had enough time to implement this week as I had an issue with the create process which took me a long time to resolve.

**Game Scene Visuals**: 
  - working on improving the game's visual presentation, added dynamic arrow mechanism to visually indicate the direction and target of card attacks.
  - Adding an option in the game scene to turn instruction labels on or off with a tooltip in the for better view of the game panel.
  - Potantially, adding a magnification effect for playable cards and looking into incorporating attack animations to enhance gameplay visuals.

**Turn System**: 
  -  Trying to implement the turn system and integrating visual cues for the play panel to reflect whos turn it is more clearly.

----------------------------------------------------------------
#### Pull Requests: 
  - [https://github.com/Prelude14/499UnityGameT19/pull/10]
  - [https://github.com/COSC-499-W2023/year-long-project-team-19/pull/166]
  - [https://github.com/Prelude14/499UnityGameT19/pull/11]

