# Color Break

## Description

Color Break is a dynamic project that blends web technologies with game development to offer a unique experience. It utilizes a combination of modern web frameworks and game development tools to create an engaging environment.

## Technologies Used

- **Web App:** MongoDB, Express.js, React.js, Node.js
- **Game:** Unity and Mirror Networking for Unity, PHP

## Setup Instructions

### Frontend (Web App)

    1. Ensure you have Node.js and npm installed on your machine. If not, download and install them from [Node.js official website](https://nodejs.org/en).
    2. Navigate to the client directory: `cd /Group Exploration/Henry's Exploration/Web/client`
    3. Install dependencies: `npm i`
    4. Start the development server: `npm start`
    
### Backend (API and Server)

    1. Navigate to the server directory: `cd /Group Exploration/Henry's Exploration/Web/server`
    2. Install dependencies: `npm i`
    3. Create a `.env` file in the server directory with the following variables:
        - `PORT=<port_number>`
        - `MONGO_URI=<your_mongodb_uri>`
    4. Start the server: `node index.js`

### Database (XAMPP)

    1. Download XAMPP and install it in your applications folder.
    2. Download the `sqlconnect` folder from the main repository, which should contain the backend php files and the `useracc.sql` database file.
    3. In XAMPP, host the `sqlconnect` folder.

### Unity (Game Dev)

    1. Setup a Unity account and download Unity Hub.
    2. Download Editor version 2021.30.3f.
    3. Clone the `499UnityGameT19` repository and import it into Unity.
    4. Unity should automatically download `parallelSync` and other packages required for multiplayer networking.
    5. Go to clone manager and click on "open clone in new editor".
    6. Start the game in each editor and select "quick match".
    7. Start one as server and one as client.
    8. Once "deal cards" is selected on both clients, the game should start.


Team 19 Members: 
<ul>
<li>aditya39p</li>
<li>dika2706</li>
<li>HenryAugustiano</li>
<li>lhenon99</li>
<li>Prelude14</li>
</ul>
