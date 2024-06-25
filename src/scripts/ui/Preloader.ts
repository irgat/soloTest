import { Assets, Container, Sprite } from 'pixi.js';

class Preloader extends Container {
    constructor(_url: string) {
        super();
        console.log("Preloader().constructor()");

        // this.loadBackground(_url);
    }

    loadBackground = async (_url: string) => {
        const texture = await Assets.load(_url);
        const background = new Sprite(texture);

        // background.anchor.set(0.5);

        // // Move the sprite to the center of the screen
        // background.x = app.screen.width / 2;
        // background.y = app.screen.height / 2;

        // app.stage.addChild(background);
        this.addChild(background);
    }
}

export default Preloader