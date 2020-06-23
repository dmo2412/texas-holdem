# texas-holdem

1) Teaxs Holdem is a poker card game in which players continuously bet and either the last man standing or the player with the best hand collects the total money bet and adds it to their existing stack.
2) MVP:
    a) algorithm to calculate winner (6-22)
    b) Deal random cards (6-23)
    c) Allow players to bet(6-24)
    d) visualization(6-26)
3) Wireframes: https://wireframe.cc/EyJkGB
4) Architecture and technology: javascript + poker solver(https://github.com/goldfire/pokersolver) Web API's => DOM, canvas
5) bonus features: e) Add sound effects d) add players in seats


File Structure:
1) /src
    * /assets
        * texas holdem api classes
        * bonus - 0945.mp3
    * index.js
    * /js
        * table.js
        * player_cards.js
        * game.js
        * middle_cards.js
        * betting.js
        * winner.js
        * Util.js
        * player_chips.js
    * scss
        * table.scss
        * player_cards.scss
        * middle_cards.scss
        * misc.scss
2) index.html
3) package.json
4) package.lock.json
5) webpack.common.js
6) webpack.prod.js
7) webpack.dev.js
8) postcss.config.js
9) node_modules
10) README.md


