
# Phaser Tiled map Spritesheet Sample

### Disclaimer
See [LICENSE.md]() for license terms and conditions.

This sample is used to show the usage of Tiled map in Phaser engine with 
Intel(R) XDK. The assets and code are created from [phaser-sidescroller](https://github.com/fariazz/phaser-sidescroller) by Pablo.

### Application Files
* asset/
* css/
  * app.css
* index.html
* js/
  * Boot.js
  * Game.js
  * gamecontroller.js
  * main.js
  * phaser.js
  * phaser.min.js
  * Preload.js

### Overview

`www/js/app.js` is the entrance of the game which defines and bootstrap following scenarios (or states):
* [Main](www/js/main.js): Setup game scenes
* [Boot](www/js/Boot.js): Set game configuration and hand over to Preload
* [Preload](www/js/Preload.js): Load assets for the game and hand over to Game
* [Game](www/js/Game.js): Main game logic
* [Game Controller](www/js/gamecontroller.js): Helper functions for controlling games

