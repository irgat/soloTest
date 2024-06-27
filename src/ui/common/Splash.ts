import { Assets, Container, Point, Sprite, Text } from 'pixi.js';
import { Bundles } from '../../types/App.types';
import { FontStyle } from '../../common/Fonts';

class Splash extends Container {
    private background: Sprite;
    private progressLabel: Text;

    public constructor() {
        console.log("Splash().constructor()");
        super();

        this.init();
    }

    private init = async () => {
        await this.initBackground();
        this.initPreloader();
        await this.loadAssets();
    }

    private initBackground = async () => {
        console.log("Splash().initBackground()");

        const texture = await Assets.loadBundle(Bundles.InitialAssets);

        if (!texture) {
            console.log('Failed to load texture');
            return
        }

        this.background = new Sprite(texture.splash);
        this.addChild(this.background);
    }

    private initPreloader = () => {
        console.log("Splash().initPreloader()");

        this.progressLabel = new Text({ style: FontStyle.HEADER_WHITE });
        this.progressLabel.anchor.set(.5, .5);
        this.progressLabel.x = this.background.width * .5;
        this.progressLabel.y = this.background.height - this.progressLabel.height * 2;

        this.addChild(this.progressLabel);
    }

    private loadAssets = async () => {
        console.log("Splash().loadAssets()");

        await Assets.loadBundle(Bundles.GameAssets, this.onProgress);
    }

    private onProgress = (_progress: number) => {
        console.log("Splash().onProgress() || ", _progress);

        this.progressLabel.text = Math.round(_progress * 100) + '%';
    }
}

export default Splash