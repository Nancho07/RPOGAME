var SideScroller = SideScroller || {};

//loading the game assets
SideScroller.Preload = function(){};

SideScroller.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.tilemap('level1', 'asset/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gameTiles', 'asset/images/tiles_spritesheet.png');
    this.load.image('player', 'asset/images/player.png');
    this.load.image('playerDuck', 'asset/images/player_duck.png');
    this.load.image('playerDead', 'asset/images/player_dead.png');
    this.load.image('goldCoin', 'asset/images/goldCoin.png');
    this.load.audio('coin', 'asset/audio/coin.wav');
  },
  create: function() {
    this.state.start('Game');
  }
};