# Color Break Capstone Project

## A turn-based non-collectable card game written in Unity, and run in a web browser on our own website.

Color Break is a multiplayer custom card game that is built in Unity, and its a dynamic project that blends web technologies with game development to offer a unique experience. Here are the main components:
* ### Complete Unity Project (found here: https://github.com/Prelude14/499UnityGameT19/tree/e4fbdb3adbae1bd93975854ed217951215662b8d/My%20project%20(4))
  * **Mainmenu.scene** (Players can log in or create accounts, track their stats, change settings, play the tutorial, and play matches)
    * https://github.com/COSC-499-W2023/year-long-project-team-19/tree/271ce6689dc7bdf0bd72ed9a4f69d210012b7302/MainMenuScene
    * also look into app folder mentioned below (Login/Create Account System's SQL table and PHP files)
  * **Samplescene.scene** (Actual card game scene, take turns playing cards and attacking the other player until one runs out of health)
    * https://github.com/COSC-499-W2023/year-long-project-team-19/tree/271ce6689dc7bdf0bd72ed9a4f69d210012b7302/GameScene
  * **Tutorial.scene** (Walks the player through the basic mechanics of the game, using dummy version of game scene)
    * https://github.com/COSC-499-W2023/year-long-project-team-19/tree/271ce6689dc7bdf0bd72ed9a4f69d210012b7302/TutorialScene
  * **Gameover.scene** (Scene triggered when a player runs out of health, it updates the user's stats, and returns to the mainmenu)
    * https://github.com/COSC-499-W2023/year-long-project-team-19/tree/271ce6689dc7bdf0bd72ed9a4f69d210012b7302/GameOverScene
       
* ### Custom Website (found here: https://client-jade-seven.vercel.app)
  * Web folder (https://github.com/COSC-499-W2023/year-long-project-team-19/tree/271ce6689dc7bdf0bd72ed9a4f69d210012b7302/Web)
    * Can play a non-multiplayer version of the game, view the rules page, or the card information page
    * Admins get special access to edit the other pages live in the browser, after logging in (found here: )
    
* ### User Account Server Files
  * app folder (https://github.com/COSC-499-W2023/year-long-project-team-19/tree/271ce6689dc7bdf0bd72ed9a4f69d210012b7302/app):
    Uses XAMPP to locally host an SQL table and PHP files. Unity uses said files to query the database and log players in, create new accounts, reset their password, or update their stats.

## Technologies Used

- **Web App:** MongoDB, Express.js, React.js, Node.js
- **Game:** Unity, Mirror Networking for Unity, ParallelSync for Unity, XAMPP, SQL, and PHP

## Developer Setup Instructions

### Actual Game:
* #### Unity Project Install (Game Dev)

      1. Setup a Unity account and download Unity Hub.

      2. Download Editor version 2021.30.3f. (https://unity.com/releases/editor/whats-new/2021.3.30)
  
      3. Clone the 499UnityGameT19 repository, import it as a new project in Unity Hub,
         and open it (https://github.com/Prelude14/499UnityGameT19/tree/e4fbdb3adbae1bd93975854ed217951215662b8d/My%20project%20(4))

      4. Project should automatically come with Mirror, parallelSync, and other packages
         required for multiplayer networking already downloaded in the project.

* #### Unity Multiplayer Setup 

      1. Follow above "Install" steps. Once imported and opened, click on the "clone
         manager" tab in the Unity editor window, and click on “open clone in new editor”
         to run another editor simultaneously. 
  
      2. Open and start the main menu scene in each editor (press play at top of editor
         window) and select “quick match” (then pick any of the four deck colours). After
         selecting a colour, the actual game scene will start.

      3. In the top left, there will be a network manager interface. First, on one editor,
         click “HOST” to run it as a host (server + client). Click “CLIENT” on the other
         one to have it connect to the host editor (clients will fail to connect if there
         is no host running yet).

      4. Click “Deal Cards” in both editors once they are either a host or a client, and
         the server will mix the players' colours together into the game deck, and deal
         each player 4 cards from it. The editor who clicks “deal cards” first will become
         player 1 and the other editor will be player 2 (server assigns who is who, and
         tracks turns accordingly).

      5. Each player will take turns playing cards from their hands (if they can afford each
         card's cost), and attacking each other using cards they have played (drag card into
         opponent’s health icon), until one player runs out of health.

      Note: Because Mirror is used for the networking features, all the scripts using said
      features need to be in the same directory as the Mirror folder (in this case both are
      just in the "Assets" folder of the project, they couldn't be placed inside the "Scripts"
      folder unfortunately).

* #### Unity User Account Setup
      1. Ensure the XAMPP is set up and RUNNING (see below SQL Database setup).

      2. Start the main menu scene in an editor, and choose the “Login” option. Create a new
         account using a valid email (it will be sent a “welcome” email, and can be sent a
         “reset password” email). You will be automatically logged in upon creating a valid
         account, and will be able to log in using the same credentials unless the account is
         manually deleted from your locally hosted phpmyadmin table.

      3. Once logged in, click “quick match” and follow multiplayer steps above to play the
         game regularly. At the end, the game will update your account’s stats accordingly.

      4. Once logged in, the "Login" button is replaced with the "Your Account" button, and
         once clicked, that menu should display the user's email and the dtae they created
         their account. It also gives the option to click the "Stats" button, which will
         show the user how many games they have won, their win to loss ratio, and the amount
         of damage they have dealt across games so far.

      5. Logged in users will also have the ability to "Logout", which basically just clears
         any scripts storing their username and sends them back to the guest version of the
         main menu (the default version).


* #### Unity Tutorial Setup 

      1. Follow above "Install" steps. Once imported and opened, open either the "Tutorial"
         scene itself and run it (thats it), or open and start the main menu scene.
  
      2. If main menu scene was opened and started, then navigate to the "tutorial" menu by
         clicking the "tutorial" button, and it should give you the option to play the
         tutorial, which just launches the "Tutorial" scene itself.

      Note: It uses dummy versions of the regular scripts prefaced with the phrase "tut",
      in order to hard code what cards the player is dealt. It contains a "Tutorial Canvas"
      GameObject that runs through different tutorial "sequences", and these sequences are
      meant to show the player the basic mechanics of the game.

### Website:
* #### Frontend (Web App)

      1. Ensure you have Node.js and npm installed on your machine. If not, download and
         install them from [Node.js official website] (https://nodejs.org/en).
  
      2. Navigate to the client directory:
         `cd Web/client`
  
      3. Install dependencies: `npm i`
  
      4. Start the development server: `npm start`
    
* #### Backend (API and Server for Web app)

      1. Navigate to the server directory:
         `cd Web/server`
  
      2. Install dependencies: `npm i`
  
      3. Create a `.env` file in the server directory with the following variables:
  
        - `PORT=<port_number>`
        - `MONGO_URI=<your_mongodb_uri>`
  
      4. Start the server: `node index.js`
  
### User Accounts Server:
* #### SQL Database (XAMPP)

      1. Download and install Xampp (link here: https://www.apachefriends.org/)
  
      2. Download the “sqlconnect” folder from the main repository, which should contain
         the backend php files and the useracc.sql database file. (add link to folder)
  
      3. Place the sqlconnect folder in XAMPP’s “htdocs” folder to host its php files on
         your localhost.
  
      4. Go to phpmyadmin, set up a new schema and import the useracc.sql file to create
         the user account table. Xampp will host this schema and table, and the php files
         in the sqlconnect folder will now be able to query it.
  
      5. Launch Xampp and run the Apache and MySQL servers. While running, the unity
         editor will be able to connect to the php files that are being hosted and
         successfully use them to query the user account table when logging in, creating
         accounts, resetting passwords or managing an account's stats.
         
 * #### Email Server Setup:
    
        1. Sign up or login to SMTP2GO (link here: [https://app.smtp2go.com/login/])
        2. Set up your sender domain in SMTP2GO (colorbreak@mail.com).
        3. Generate an API key and add it to the create.php and reset.php files.

### Known Issues: 
* Website runs old build of the game, missing multiplayer features, because multiplayer needs dedicated server build that clients connect to and it was easier to just develop
  multiplayer to work locally in 2 editors using ParallelSync, and it still demonstrates multiplayer functionality, just not deployed to the browser.
 
* Connecting to a locally run XAMPP server to log in inside of the website version of the game requires changing the http.config file of your XAMPP apache server to allow connections
  from all sources (see this file: https://github.com/COSC-499-W2023/year-long-project-team-19/blob/4ac696aaf175a41fb538dfcaf85fa5583c1b6317/app/Xampp%20Config%20Files/httpd.conf),
  and it might still break if you are using a specific browser (Firefox and Google Chrome seem to be fine).
 
* While running a multiplayer setup, the host build of the game will be able to see the game over scene and update the stat's of its user fine, but the client doesn't always
  get sent to the game over scene properly, they might get stuck on the samplescene indefinitely.
 
* Multiplayer Setup only works with a Host and Client build, it will not work quite right with a server build and two clients. This is due to how the server commands are called
  in the PlayerManager and sharedVarManager scripts, the server has its own versions of the scripts that it will update when the commands are called, and the clients won't find
  the values properly. When one build is running as a host, the server commands are run on that client's copy of the scripts, so the logic works as intended.
  
* Game doesn't quite have all card abilities fully functional yet, but all cards are able to be played and attacked with proerly.
  
* Cards don't naturally disappear off the screen, so to get to the end of a game, the majority of the 40 cards in the game deck will be dealt across both players, and the
  player's hands might start overflowing off the page. The cards are supposed to die naturally after attacking twice, and their are a couple cards with the ability to destroy
  all of the cards in the player's or opponent's play zones, so its a work in progress.

### Credit:
     
        1. Game Logo and Card Artwork made using BING AI `https://www.bing.com/images/create`

        2. Main Menu Background Music: Your Digital Footprint (Investigation Theme) - Composed by One Man Symphony - https://onemansymphony.bandcamp.com
           Covered by the CC BY 4.0 license. You can find more information about it here: https://creativecommons.org/licenses/by/4.0/ 
        
        2. View this README (https://github.com/COSC-499-W2023/year-long-project-team-19/tree/271ce6689dc7bdf0bd72ed9a4f69d210012b7302/Resources)
           in the resources folder to see the other credits for any assests used.

## Team 19 Members: 
<ul>
<li>aditya39p</li>
<li>dika2706</li>
<li>HenryAugustiano</li>
<li>lhenon99</li>
<li>Prelude14</li>
</ul>
