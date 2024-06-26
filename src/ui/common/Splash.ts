import { Assets, Container, Sprite } from 'pixi.js';

class Splash extends Container {
    public constructor(_url: string) {
        console.log("Splash().constructor()");
        super();

        this.loadBackground(_url);
    }

    private loadBackground = async (_url: string) => {
        const texture = await Assets.load(_url);
        const background = new Sprite(texture);

        this.addChild(background);
    }
}

export default Splash