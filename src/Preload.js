/* jshint browser:true */
// create MonsterGame Class
var MonsterGame = MonsterGame || {};

// create Preload function in MonsterGame
MonsterGame.Preload = function (game) {};

// set Preload function prototype
MonsterGame.Preload.prototype = {

    preload: function() {
        //show loading screen
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        //load game assets
        this.load.tilemap('level1', 'asset/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tileset', 'asset/tileset.png');
        this.load.image('player', 'asset/player.png');
    },

    create: function() {
        this.state.start('Game');
    }

};
