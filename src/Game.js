/* jshint browser:true */
// create MonsterGame Class
var MonsterGame = MonsterGame || {};

// create Game function in MonsterGame
MonsterGame.Game = function (game) {};

// set Game function prototype
MonsterGame.Game.prototype = {

    create: function() {
        this.map = this.game.add.tilemap('level1');

        //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
        this.map.addTilesetImage('tileset', 'tileset');

        //create layer
        this.floorsLayer = this.map.createLayer('floorsLayer');
        this.wallsLayer = this.map.createLayer('wallsLayer');

        //collision on wallsLayer
        this.map.setCollisionBetween(1, 1200, true, 'wallsLayer');

        //resizes the game world to match the layer dimensions
        this.floorsLayer.resizeWorld();
    }

};
