import { Application } from 'pixi.js';
import Splash from './ui/common/Splash';

class App {
    private app: Application;
    private splashUrl: string = "images/splash.png";
    private settings: Settings = {
        background: {
            color: '#333333',
        },
        dimensions: {
            width: 1024,
            height: 600,
        },
    };

    /**
     * 
     * @param {Settings} [_settings] - Optional app settings to override the default settings
     */
    public constructor(_settings?: Settings) {
        console.log(`App().constructor() || created with ${_settings != null ? "custom settings" : "default settings"}`);

        const settings = _settings != null ? _settings : this.settings;

        this.app = new Application();
        this.init(settings);
    }

    /**
     * 
     * @param {Settings} _settings - App settings
     */
    private init = async (_settings: Settings) => {
        console.log("App().init()");

        await this.initApp(_settings);
        await this.initSplash(this.splashUrl);
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

    private initSplash = async (_url: string) => {
        console.log("App().initSplash() || ", _url);

        const splash = new Splash(_url);

        this.app.stage.addChild(splash);
    }

}

const app = new App();