class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload() {
        //loads audio
        this.load.audio('sfx_select', './assets/selectSound.wav');
        this.load.audio('sfx_explosion', './assets/explosionSound.wav');
        this.load.audio('sfx_rocket', './assets/rocketSound.wav');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        //this.scene.start("playScene");
    }
}