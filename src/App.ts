import { Application, Assets } from 'pixi.js';
import { Settings, DEFAULT_SETTINGS, Bundles } from './types/App.types';
import Splash from './ui/common/Splash';

class App {
    private app: Application;
    private settings: Settings = DEFAULT_SETTINGS;

    /**
     * 
     * @param {Settings} [_settings] - Optional app settings to override the default settings
     */
    public constructor(_settings?: Settings) {
        console.log(`App().constructor() || created with ${_settings ? "custom settings" : "default settings"}`);

        // override default settings
        if (_settings) this.settings = _settings;

        this.app = new Application();
        this.init();
    }

    private init = async () => {
        console.log("App().init()");

        await this.initApp(this.settings);
        await this.loadAssets(this.settings.manifest);
        await this.initSplash();
    }

    /**
     * 
     * @param {Settings} _settings - App settings
     */
    private initApp = async (_settings: Settings) => {
        console.log("App().initApp()");

        await this.app.init({
            background: _settings.background.color,
            width: _settings.dimensions.width,
            height: _settings.dimensions.height,
        });

        document.body.appendChild(this.app.canvas);
    }

    private loadAssets = async (_url: string) => {
        console.log("App().loadAssets() || ", _url);

        await Assets.init({ manifest: _url });
        Assets.backgroundLoadBundle([Bundles.Splash]);
    }

    private initSplash = () => {
        console.log("App().initSplash()");

        const splash = new Splash();
        this.app.stage.addChild(splash);
    }

}

const app = new App();