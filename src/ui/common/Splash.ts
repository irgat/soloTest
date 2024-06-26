import { Assets, Container, Sprite } from 'pixi.js';
import { Bundles } from '../../types/App.types';

class Splash extends Container {
    private background: Sprite = new Sprite();

    public constructor() {
        console.log("Splash().constructor()");
        super();

        this.loadBackground();
    }

    private loadBackground = async () => {
        console.log("Splash().loadBackground()");

        const texture = await Assets.loadBundle(Bundles.Splash);

        if (!texture) {
            console.log('Failed to load texture');
            return
        }

        this.background = new Sprite(texture.splash);
        this.addChild(this.background);
    }
}

export default Splash