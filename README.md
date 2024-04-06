# Color Break Capstone Project

## A turn-based non-collectable card game written in Unity, and run in a web browser on our own website.

Color Break is a multiplayer custom card game that is built in Unity, and its a dynamic project that blends web technologies with game development to offer a unique experience. Here are the main components:
* ### Complete Unity Project (found here: )
  * **Mainmenu.scene** (Players can log in or create accounts, track their stats, change settings, play the tutorial, and play matches)
  * **Samplescene.scene** (Actual card game scene, take turns playing cards and attacking the other player until one runs out of health)
  * **Tutorial.scene** (Walks the player through the basic mechanics of the game, using dummy version of game scene)
  * **Gameover.scene** (Scene triggered when a player runs out of health, it updates the user's stats, and returns to the mainmenu)
       
* ### Custom Website (found here: )
  * Can play a non-multiplayer version of the game, view the rules page, or the card information page
  * Admins get special access to edit the other pages live in the browser, after logging in (found here: )
    
* ### User Accounts Server Files (found here: )
  * Uses XAMPP to locally host an SQL table and PHP files. Unity uses said files to query the database and log players in, create new accounts, reset their password, or update their stats.

## Technologies Used

- **Web App:** MongoDB, Express.js, React.js, Node.js
- **Game:** Unity, Mirror Networking for Unity, Parallelsync for Unity, XAMPP, SQL, and PHP

## Developer Setup Instructions

### Actual Game:
* #### Unity Project Install (Game Dev)

      1. Setup a Unity account and download Unity Hub.

      2. Download Editor version 2021.30.3f. (might have to check archive versions)
  
      3. Clone the 499UnityGameT19 repository, import it as a new project in Unity Hub, and open it (add link)

      4. Project should automatically come with Mirror, parallelSync, and other packages required for multiplayer networking
         already downloaded in the project.

* #### Unity Multiplayer Setup 

      1. Follow above "Install" steps. Once imported and opened, click on the "clone manager" tab in the Unity editor window,
         and click on “open clone in new editor” to run another editor simultaneously. 
  
      2. Open and start the main menu scene in each editor (press play at top of editor window) and select “quick match”
         (then pick any of the four deck colours). After selecting a colour, the actual game scene will start.

      3. In the top left, there will be a network manager interface. First, on one editor, click “HOST” to run it as a host
         (server + client). Click “CLIENT” on the other one to have it connect to the host editor (clients will fail to
         connect if there is no host running yet).

      4. Click “Deal Cards” in both editors once they are either a host or a client, and the server will mix the players'
         colours together into the game deck, and deal each player 4 cards from it. The editor who clicks “deal cards” first
         will become player 1 and the other editor will be player 2 (server assigns who is who, and tracks turns accordingly).

      5. Each player will take turns playing cards from their hands (if they can afford each card's cost), and attacking
         each other using cards they have played (drag card into opponent’s health icon), until one player runs out of health.

      Note: Because Mirror is used for the networking features, all the scripts using said features need to be in the same 
      directory as the Mirror folder (in this case both are just in the "Assets" folder of the project, they couldn't be 
      placed inside the "Scripts" folder unfortunately).

* #### Unity User Account Setup
      1. Ensure the XAMPP is set up and RUNNING (see below SQL Database setup).

      2. Start the main menu scene in an editor, and choose the “Login” option. Create a new account using a valid email
         (it will be sent a “welcome” email, and can be sent a “reset password” email). You will be automatically logged in
         upon creating a valid account, and will be able to log in using the same credentials unless the account is manually
         deleted from your locally hosted phpmyadmin table.

      3. Once logged in, click “quick match” and follow multiplayer steps above to play the game regularly. At the end, the
         game will update your account’s stats accordingly.

      4. Once logged in, the "Login" button is replaced with the "Your Account" button, and once clicked, that menu should
         display the user's email and the dtae they created their account. It also gives the option to click the "Stats"
         button, which will show the user how many games they have won, their win to loss ratio, and the amount of damage
         they have dealt across games so far.

      5. Logged in users will also have the ability to "Logout", which basically just clears any scripts storing their
         username and sends them back to the guest version of the main menu (the default version).


* #### Unity Tutorial Setup 

      1. Follow above "Install" steps. Once imported and opened, open either the "Tutorial" scene itself and run it
         (thats it), or open and start the main menu scene.
  
      2. If main menu scene was opened and started, then navigate to the "tutorial" menu by clicking the "tutorial" button,
         and it should give you the option to play the tutorial, which just launches the "Tutorial" scene itself.

      Note: It uses dummy versions of the regular scripts prefaced with the phrase "tut", in order to hard code what cards
      the player is dealt. It contains a "Tutorial Canvas" GameObject that runs through different tutorial "sequences", and
      these sequences are meant to show the player the basic mechanics of the game.

### Website:
* #### Frontend (Web App)

      1. Ensure you have Node.js and npm installed on your machine. If not, download and install them 
         from [Node.js official website] (https://nodejs.org/en).
  
      2. Navigate to the client directory: `cd /Group Exploration/Henry's Exploration/Web/client`
  
      3. Install dependencies: `npm i`
  
      4. Start the development server: `npm start`
    
* #### Backend (API and Server for Web app)

      1. Navigate to the server directory: `cd /Group Exploration/Henry's Exploration/Web/server`
  
      2. Install dependencies: `npm i`
  
      3. Create a `.env` file in the server directory with the following variables:
  
        - `PORT=<port_number>`
        - `MONGO_URI=<your_mongodb_uri>`
  
      4. Start the server: `node index.js`

### User Accounts Server:
* #### SQL Database (XAMPP)

      1. Download and install Xampp (link here: )
  
      2. Download the “sqlconnect” folder from the main repository, which should contain the backend php files and
         the useracc.sql database file. (add link to folder)
  
      3. Place the sqlconnect folder in XAMPP’s “htdocs” folder to host its php files on your localhost.
  
      4. Go to phpmyadmin, set up a new schema and import the useracc.sql file to create the user account table.
         Xampp will host this schema and table, and the php files in the sqlconnect folder will now be able to query it.
  
      5. Launch Xampp and run the Apache and MySQL servers. While running, the unity editor will be able to connect to
         the php files that are being hosted and successfully use them to query the user account table when logging in,
         creating accounts, resetting passwords or managing an account's stats.


## Team 19 Members: 
<ul>
<li>aditya39p</li>
<li>dika2706</li>
<li>HenryAugustiano</li>
<li>lhenon99</li>
<li>Prelude14</li>
</ul>
