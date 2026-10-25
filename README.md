# Get That Slice! — Legacy HTML5 Prototype

> **Looking for the current game? [Play Get That Slice! at tmntpizzaco.com](https://tmntpizzaco.com/).**
>
> This repository preserves an early version of the project for learning and historical reference. The live game has since changed substantially. **Cloning this repository does not give you the current live game's source code or feature set.**

## From the original prototype to the current game

This project began as a Teenage Mutant Ninja Turtles-themed adaptation of [Rehan Umar's classic arcade game](https://github.com/rehanumar/p3-classic-arcade-game), built with HTML5 Canvas and JavaScript. The early version puts Leonardo in a Frogger-style game: dodge Shredder, collect pizza and other items, and try to keep your run going.

Get That Slice! has grown well beyond that original prototype. The current [live game](https://tmntpizzaco.com/) includes:

- All four turtles as selectable characters, with different abilities.
- Combo scoring and a wider range of power-ups.
- Custom rival names and a high-score board.
- Keyboard controls plus swipe and on-screen D-pad controls.
- A redesigned arcade-style interface with pause, music, and sound-effect controls.

These describe the current live experience, not the older source preserved here. The site is the place to play the current game; this repository is the place to explore its early foundations.

## Repository status

**Legacy / historical reference — superseded by the live game.**

The original files remain available so earlier tutorial links, attribution, and coding examples continue to make sense. This repository is not maintained as a mirror of the live deployment. Its older interface, controls, and behavior should not be used to judge the current game.

For the original development walkthrough, see [Creating a TMNT Themed HTML Game](https://templeknights.download/2023/12/26/creating-a-tmnt-themed-html-game/).

## What is in this repository?

| Location | Contents |
| --- | --- |
| [`TMNT_Game_Theme/`](TMNT_Game_Theme/) | The early Get That Slice! themed prototype. |
| `index.html`, `js/`, `css/`, `images/` at the repository root | The original Frogger-style foundation retained from the upstream project. |
| [`LICENSE`](LICENSE) | Original MIT license and upstream copyright notice. |
| [`TMNT_Game_Theme/Legal-README.md`](TMNT_Game_Theme/Legal-README.md) | Historical fan-project notice supplied with the themed prototype. |

## Run the legacy prototype locally

No build step or package installation is required. With Python 3 installed:

```bash
git clone https://github.com/SeanRiggs/HTML5-TMNT-Themed-browser-game.git
cd HTML5-TMNT-Themed-browser-game
python3 -m http.server 8000
```

Open **http://localhost:8000/TMNT_Game_Theme/** for the themed prototype. Use the arrow keys or WASD to move.

Opening **http://localhost:8000/** instead runs the original upstream-style game. Neither local version is the current live release.

## Your turn: build something radical

Every game starts somewhere. This one started with a simple idea: take a classic arcade foundation, add turtles and pizza, and learn by making it your own. The live game shows how far that idea can go. This early version is still a great place to get your hands on the code and try your next idea.

**Fork it. Break it. Figure out why. Make it better.**

A few directions to explore:

- **Make it easier to play anywhere:** improve the layout, add touch controls, or make keyboard navigation clearer.
- **Give the gameplay a twist:** experiment with new enemies, difficulty settings, scoring rules, or power-ups.
- **Polish the arcade experience:** improve collision handling, reset behavior, instructions, and visual feedback.
- **Help the next developer:** explain a tricky function, improve setup instructions, or document a bug and its fix.
- **Create your own theme:** bring original characters, artwork, and ideas to the same Canvas foundation.

These are ideas for your fork or a proposed contribution, not promises about features already included here.

### Share your improvements

1. Fork this repository and create a branch for your change.
2. Keep the change focused, and say whether it affects the original game at the root or the themed game in `TMNT_Game_Theme/`.
3. Run the version you changed. Check movement, collisions, scoring, and restarting; include the browser and device you used.
4. Open a pull request explaining what changed and why. Screenshots or a short clip are especially helpful for gameplay and interface changes.
5. Keep the original credits and license notices, and use assets you have permission to share.

Pull requests can be reviewed for this legacy learning project. They do not automatically update the game at tmntpizzaco.com, and acceptance or a live release is not guaranteed.

Whether you fix one rough edge or take your fork in a completely new direction, show what you learned and give the next person something useful to build on. **Cowabunga—go get that slice!**

## Credits and licensing

The original game foundation is by [Rehan Umar](https://github.com/rehanumar/p3-classic-arcade-game); the TMNT-themed adaptation is by [Sean Riggs](https://github.com/SeanRiggs). Preserve the existing copyright and license notices when reusing the code.

See the [MIT license](LICENSE) for the software's license text. Third-party characters, names, artwork, and other assets remain subject to their respective owners' rights; the code license does not itself grant rights to those materials.

**[Play the current Get That Slice!](https://tmntpizzaco.com/)**
