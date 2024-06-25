import { Application, Assets, Sprite } from 'pixi.js';
import Preloader from './ui/Preloader';

interface Settings {
    background: {
        color: string,
    },
    dimensions: {
        width: number,
        height: number,
    },
}

class App {
    private app: Application;
    private preloaderUrl: string = "images/splash.png";
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

        let settings = _settings != null ? _settings : this.settings;

        this.app = new Application();
        this.initApp(settings);
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

        this.initPreloader();
    }

    private initPreloader = async () => {
        console.log("App().initPreloader() || ", this.preloaderUrl);
        const preloader = new Preloader(this.preloaderUrl);
        this.app.stage.addChild(preloader);

        // const texture = await Assets.load(this.preloaderUrl);
        // const preloader = new Sprite(texture);

        // this.app.stage.addChild(preloader);
    }
}

const app = new App();