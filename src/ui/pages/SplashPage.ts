import { AppConfig } from '../../common/AppConfig';
import { Assets, Container, Sprite, Text } from 'pixi.js';
import { Bundles } from '../../App.types';
import { Events } from '../../common/Events';
import { FontStyle } from '../../common/Fonts';

/**
 * Initial page to be displayed until the asset bundles are loaded. Progress information is represented by a preloader.
 */
export class SplashPage extends Container {
    private background: Sprite;
    private progressLabel: Text;

    /**
     * 
     * @param {string} _url - URL to manifest
     */
    public constructor(_url: string) {
        console.log("SplashPage().constructor()");
        super();

        this.init(_url);
    }

    /**
     * Displays the preloader copy immediately and awaits the manifest, then starts loading the assets asyncreniously.
     * The background is displayed as soon as it's loaded.
     * 
     * @param {string} _url - URL to manifest
     */
    private init = async (_url: string) => {
        console.log("SplashPage().init()");

        this.initPreloader();
        await this.loadAssets(_url);
        await this.initBackground();
    }

    private initPreloader = () => {
        console.log("SplashPage().initPreloader()");

        let config = AppConfig.getInstance().getConfig();

        this.progressLabel = new Text({ style: FontStyle.HEADER_WHITE });
        this.progressLabel.anchor.set(.5, .5);
        this.progressLabel.x = config.settings.dimensions.width * .5;
        this.progressLabel.y = config.settings.dimensions.height - this.progressLabel.height * 2;

        this.addChild(this.progressLabel);
    }

    /**
     * 
     * @param {string} _url - URL to manifest
     */
    private loadAssets = async (_url: string) => {
        console.log("SplashPage().loadAssets()");

        await Assets.init({ manifest: _url });
        Assets.loadBundle([Bundles.Preloader, Bundles.SplashPage, Bundles.GameAssets], this.onProgress);
    }

    /**
     * 
     * @param {number} _progress - 0 to 1
     */
    private onProgress = (_progress: number) => {
        console.log("SplashPage().onProgress() || ", _progress);

        this.progressLabel.text = Math.round(_progress * 100) + '%';

        if (_progress === 1) {
            this.emit(Events.LOADED);
        }
    }

    private initBackground = async () => {
        console.log("SplashPage().initBackground()");

        const texture = await Assets.loadBundle(Bundles.SplashPage);

        if (!texture) {
            console.log("Failed to load texture");
            return
        }

        this.background = new Sprite(texture.splashPage);
        this.addChildAt(this.background, 0);
    }
}