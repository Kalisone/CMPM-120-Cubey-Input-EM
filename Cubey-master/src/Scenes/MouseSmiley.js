class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley");
        this.my = {sprite: {}};
    }

    preload() { }

    create(){
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'

        //* Adds sprite once on click
        this.pointer = this.input.activePointer; // Get the active pointer

        this.input.on('pointerdown', (pointer) => {
            if(pointer.leftButtonDown()) {
                this.bodyX = this.smileX = pointer.x;
                this.bodyY = pointer.y;
                this.smileY = this.bodyY + 20;
                
                this.add.sprite(this.bodyX, this.bodyY, "yellowBody");
                this.add.sprite(this.smileX, this.smileY, "smile");
            }
        });
        //*/
    }

    update(){
        let my = this.my;   // create an alias to this.my for readability

        /* Continuously adds sprites while clicked
        let pointer = this.input.activePointer;
        if(pointer.isDown){
            this.bodyX = this.smileX = pointer.x;
            this.bodyY = pointer.y;
            this.smileY = this.bodyY + 20;
            
            this.add.sprite(this.bodyX, this.bodyY, "yellowBody");
            this.add.sprite(this.smileX, this.smileY, "smile");
        }
        //*/
    }
}