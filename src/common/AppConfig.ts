import { ApplicationOptions } from "pixi.js";
import { Config} from "../App.types";
import { DEFAULT_MANIFEST, DEFAULT_SETTINGS } from "../App.consts";

/**
 * A singleton class to manage global properties.
 * 
 * If app settings aren't provided during initialisation, default settings are applied.
 */
export class AppConfig {
    private static instance: AppConfig;
    private config: Config;

    /**
     * Private constructor to avoid multiple instances.
     * 
     * @param {Config} [config] - Configuration object
     */
    private constructor(config: Config) {
        console.log('AppConfig().constructor() || config', config);

        this.config = config;
    }

    /**
     * Public method to initialise AppConfig.
     * 
     * If app manifest or settings aren't provided during initialisation, default values are injected to the configuration.
     * 
     * @param {Config} [config] - Optional configuration
     * @returns The instance of AppConfig
     */
    public static getInstance(config?: Partial<Config>): AppConfig {
        console.log('AppConfig().getInstance()');

        if (!this.instance) {
            this.instance = new AppConfig({
                manifest: config?.manifest || DEFAULT_MANIFEST,
                settings: config?.settings || DEFAULT_SETTINGS,
            });
        }

        return this.instance;
    }

    /**
     * Public method to access app config
     * 
     * @returns App config
     */
    public getConfig(): Config {
        console.log('AppConfig().getConfig() || this.config = ', this.config);

        return this.config;
    }

    /**
     * Public method to access app settings
     * 
     * @returns App settings
     */
    public getSettings(): Partial<ApplicationOptions> {
        console.log('AppConfig().getSettings() || this.config.settings = ', this.config.settings);

        return this.config.settings;
    }
}