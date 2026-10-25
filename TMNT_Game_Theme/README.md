# Get That Slice! — Legacy TMNT Prototype

> **The current game is at [tmntpizzaco.com](https://tmntpizzaco.com/).**
>
> This folder contains the early themed prototype, preserved for learning and historical reference. The live game has changed substantially and its current source is not supplied by this folder.

## About this version

This early adaptation of [Rehan Umar's classic arcade game](https://github.com/rehanumar/p3-classic-arcade-game) uses HTML5 Canvas and JavaScript. Play as Leonardo, avoid Shredder, and collect pizza and other themed items to increase your score. Hearts can add lives.

The modern live game includes selectable turtles with different abilities, combos, additional power-ups, rivals, mobile controls, and a redesigned interface. Those features should not be expected in this legacy snapshot.

## Run the legacy game

From the repository root:

```bash
python3 -m http.server 8000
```

Then open **http://localhost:8000/TMNT_Game_Theme/** in your browser. Use the arrow keys or WASD to move.

For cloning instructions and the distinction between the original foundation and this themed version, see the [main README](../README.md).

## Files

- `index.html`: page layout and instructions.
- `js/app.js`: characters, items, and keyboard input.
- `js/engine.js`: game loop, rendering, and game-state handling.
- `js/resources.js`: image loading and caching.
- `js/script.js`: additional interface behavior.
- `css/` and `images/`: styles and assets for this early version.

## Status and credits

This folder is retained as a historical learning example, not maintained as the current game's source or deployment.

Original foundation: [Rehan Umar](https://github.com/rehanumar/p3-classic-arcade-game). TMNT-themed adaptation: [Sean Riggs](https://github.com/SeanRiggs).

See [LICENSE](LICENSE) for the existing software license and [Legal-README.md](Legal-README.md) for the historical fan-project notice. The software license does not itself grant rights to third-party characters or assets.

**[Play the current game](https://tmntpizzaco.com/).**
