import { AppConfig } from './common/AppConfig';
import { Application } from 'pixi.js';
import { Settings } from './types/App.types';
import { SplashPage } from './ui/pages/SplashPage';
import { Events } from './common/Events';


/**
 * The entry point.
 * 
 * The constructor initialises the AppConfig -to store the app setting globally, then the app.
 */
class App {
    private app: Application;

    /**
     * 
     * @param {Settings} [_settings] - Optional app settings to override default settings.
     */
    public constructor(_settings?: Settings) {
        console.log(`App().constructor() || created with ${_settings ? "custom settings" : "default settings"}`);

        // override default settings
        let appConfig = AppConfig.getInstance({ settings: _settings });

        this.init(appConfig.getSettings());
    }

    /**
     * 
     * @param {Settings} _settings - Settings to create the Pixi app
     */
    private init = async (_settings: Settings) => {
        console.log("App().init()");

        await this.initApp(_settings);
        await this.initPreloader(_settings.manifest);
    }

    /**
     * Creates the Pixi app.
     * 
     * @param {Settings} _settings - App settings
     */
    private initApp = async (_settings: Settings) => {
        console.log("App().initApp()");

        this.app = new Application();

        await this.app.init({
            background: _settings.background.color,
            width: _settings.dimensions.width,
            height: _settings.dimensions.height,
        });

        document.body.appendChild(this.app.canvas);
    }

    /**
     * Creates the splash page to load the assets.
     * 
     * @param {string} _url - URL to manifest
     */
    private initPreloader = async (_url: string) => {
        console.log("App().initPreloader()");

        const splash = new SplashPage(_url);
        splash.on(Events.LOADED, this.onLoaded);
        this.app.stage.addChild(splash);
    }

    private onLoaded() {
        console.log("App().onLoaded()");
    }
}

const app = new App();