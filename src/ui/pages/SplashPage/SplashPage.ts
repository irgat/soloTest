import { AppConfig } from '../../../common/AppConfig';
import { Assets, Sprite, Text } from 'pixi.js';
import { Page } from '../Page';
import { Bundles } from '../../../App.types';
import { Events } from '../../../common/Events';
import { FontStyle } from '../../../common/Fonts';
import { PageIds } from '../Page.types';

/**
 * The initial page that is displayed until the asset bundles are loaded. Progress information is represented by a preloader.
 */
export class SplashPage extends Page {
    private background: Sprite;
    private progressLabel: Text;

    /**
     * 
     * @param {string} url - URL to manifest
     */
    public constructor(url: string) {
        console.log('SplashPage().constructor()');
        super(PageIds.SplashPage);

        this.init(url);
    }

    /**
     * Displays the preloader copy immediately and awaits the manifest, then starts loading the assets asyncreniously.
     * The background is displayed as soon as it's loaded.
     * 
     * @param {string} url - URL to manifest
     */
    private init = async (url: string) => {
        console.log('SplashPage().init()');

        this.initPreloader();
        await this.loadAssets(url);
        await this.initBackground();
    }

    private initPreloader = () => {
        console.log('SplashPage().initPreloader()');

        const { width, height } = AppConfig.getInstance().getSettings()

        this.progressLabel = new Text({ style: FontStyle.HEADER_WHITE });
        this.progressLabel.anchor = .5;
        this.progressLabel.x = (width || 1) * .5;
        this.progressLabel.y = (height || 0) - this.progressLabel.height * 2;

        this.addChild(this.progressLabel);
    }

    /**
     * 
     * @param {string} url - URL to manifest
     */
    private loadAssets = async (url: string) => {
        console.log('SplashPage().loadAssets()');

        await Assets.init({ manifest: url });
        Assets.loadBundle([Bundles.Preloader, Bundles.SplashPage, Bundles.GameAssets], this.onProgress);
    }

    /**
     * 
     * @param {number} progress - 0 to 1
     */
    private onProgress = (progress: number) => {
        console.log('SplashPage().onProgress() || ', progress);

        this.progressLabel.text = Math.round(progress * 100) + '%';

        if (progress === 1) {
            this.emit(Events.LOADED);
            // this.emit(Events.LOADED, { payload: 'test' });
        }
    }

    private initBackground = async () => {
        console.log('SplashPage().initBackground()');

        const texture = await Assets.loadBundle(Bundles.SplashPage);

        if (!texture) {
            console.log('Failed to load texture');
            return
        }

        this.background = new Sprite(texture[Bundles.SplashPage]);
        this.addChildAt(this.background, 0);
    }
}