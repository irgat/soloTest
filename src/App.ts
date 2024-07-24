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
     * @param {Config} [config] - Optional app configuration to override default settings.
     */
    public constructor(config?: Config) {
        console.log(`App().constructor() || created with ${config ? 'custom config' : 'default config'}`);

        // override default config
        let appConfig = AppConfig.getInstance(config);

        this.init(appConfig.getConfig());
    }

    /**
     * 
     * @param {Config} config - Configuration to create the Pixi app
     */
    private init = async (config: Config) => {
        console.log('App().init()');

        await this.initApp(config.settings);
        await this.initPreloader(config.manifest);
    }

    /**
     * Creates the Pixi app.
     * 
     * @param {ApplicationOptions} settings - App settings
     */
    private initApp = async (settings: Partial<ApplicationOptions>) => {
        console.log('App().initApp()');

        this.app = new Application();

        await this.app.init(settings);

        document.body.appendChild(this.app.canvas);
    }

    /**
     * Creates the splash page to load the assets.
     * 
     * @param {string} url - URL to manifest
     */
    private initPreloader = async (url: string) => {
        console.log('App().initPreloader()');

        const splash = new SplashPage(url);
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