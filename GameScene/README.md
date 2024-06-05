# Color Break Capstone Project

## Game Scene:

### Base features:
- Contains features that make the game run without multiplayer. This means base features like the old card database and the play zones. The majority of these functions have been translated into multiplayer features.
### Multiplayer features:
- Core scripts: The core scripts control the majority of game functions. It contains player managers and the shared variable managers. These managers control features like turns, card draw, and RPC commands like attacking a player. Scripts for card prefabs can also be found here. dbDisplay is the main component of the card prefab. It controls all the variables and holds all important methods for the event handlers. This includes the card zoom and attacking. The dbDisplay script also handles how the card prefab's information is filled. dragScript is another script attached to the prefab that handles the card drag event when it's played from hand. Other scripts that handle game states such as health, turns, and the player deck can be found here as well.

- Mirror assets: these are asssets that allow the Mirror API to function.
### Prefabs : 
- These are prefabs made for the game scene. cardInHand is the prefab for cards. It holds the major scripts for cards like dbDisplay, card  back script, drag script, and the attack border script. The cardDupe prefab is the one that shows the zoomed in version of the card when you hover over a card. It's a copy of the cardInHand prefab. The play panels and health bars are prefabs. The play panels have a colllision border around them which interacts with the drag script for cards. Health prefabs have a script that's manipulated through the shared variable managers. It calculates its fill amount to simulate a health bar.
      
## Team 19 Members: 
<ul>
<li>aditya39p</li>
<li>dika2706</li>
<li>HenryAugustiano</li>
<li>lhenon99</li>
<li>Prelude14</li>
</ul>
