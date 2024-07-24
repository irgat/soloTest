import { AppConfig } from "./common/AppConfig";
import { Application, ApplicationOptions } from "pixi.js";
import { Config } from "./App.types";
import { DEFAULT_MANIFEST } from "./App.consts";
import { Events } from "./common/Events";
import { HomePage } from "./ui/pages/HomePage";
import { SplashPage } from "./ui/pages/SplashPage";

/**
 * The entry point.
 * 
 * The constructor initialises the AppConfig -to store the app setting globally, then the app.
 */
class App {
    private app: Application;

    /**
     * 
     * @param {Config} [_config] - Optional app configuration to override default settings.
     */
    public constructor(_config?: Config) {
        console.log(`App().constructor() || created with ${_config ? 'custom config' : 'default config'}`);

        // override default config
        let appConfig = AppConfig.getInstance(_config);

        this.init(appConfig.getConfig());
    }

    /**
     * 
     * @param {Config} _config - Configuration to create the Pixi app
     */
    private init = async (_config: Config) => {
        console.log('App().init()');

        await this.initApp(_config.settings);
        await this.initPreloader(_config.manifest);
    }

    /**
     * Creates the Pixi app.
     * 
     * @param {ApplicationOptions} _settings - App settings
     */
    private initApp = async (_settings: Partial<ApplicationOptions>) => {
        console.log('App().initApp()');

        this.app = new Application();

        await this.app.init(_settings);

        document.body.appendChild(this.app.canvas);
    }

    /**
     * Creates the splash page to load the assets.
     * 
     * @param {string} _url - URL to manifest
     */
    private initPreloader = async (_url: string) => {
        console.log('App().initPreloader()');

        const splash = new SplashPage(_url);
        splash.on(Events.LOADED, this.onLoaded);
        this.app.stage.addChild(splash);
    }

    private onLoaded() {
        console.log('App().onLoaded()');
    }
}

// todo: load the config from an external file
// Create the app
const app = new App({
    manifest: DEFAULT_MANIFEST,
    settings: {
        background: '#333333',
        width: 1024,
        height: 600,
    }
});