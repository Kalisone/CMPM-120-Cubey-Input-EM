class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmileyScene");
        this.my = {sprite: {}};
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("yellowBody", "yellow_body_squircle.png");
        this.load.image("smile", "face_a.png");
        this.load.image("smileDimple", "face_c.png");
        this.load.image("handOpen", "hand_yellow_open.png");

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>MouseSmiley.js</h2>'
    }

    create(){

    }

    update(){

    }
}