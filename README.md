# p3-classic-arcade-game

*Go to Ninja Turtles Arcade Game 🐢 [TMNT Themed](https://github.com/SeanRiggs/HTML5-TMNT-Themed-browser-game/tree/master/TMNT_Game_Theme)

This is a clone of the classic arcade game [Frogger](https://en.wikipedia.org/wiki/Frogger) observing the feasibility of game engines in JavaScript! This project is using the HTML5 canvas element and JavaScript canvas APIs. The live demo of this project is available [here](https://rehanumar.github.io/p3-classic-arcade-game/index.html).

## Explanation of project structure:
- `index.html` is pretty much empty! it only contains the canvas element and instructions to play the game
- `js/app.js` contains the game characters and do the event handling
- `js/engine.js` have the actual game loop which sets the canvas and redraw the game each time based on the game characters data. It is doing a little more then that so dig through the code to fully understand it.
- `js/resources.js` is just a resource caching utility

## How to run the application
- clone it.
- Open the `index.html` file in your browser.
