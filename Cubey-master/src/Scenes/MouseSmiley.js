class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley");
        this.my = {sprite: {}};
    }

    preload() { }

    create(){
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'
        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "yellowBody");
        my.sprite.dimple = this.add.sprite(this.smileX, this.smileY, "smileDimple");
    }

    update(){

    }
}