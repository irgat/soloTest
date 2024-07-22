import { Config, Settings } from "../App.types";
import { DEFAULT_MANIFEST, DEFAULT_SETTINGS } from "../App.consts";

/**
 * A singleton class to manage global properties.
 * 
 * If app settings aren't provided during initialisation, default settings are applied.
 */
export class AppConfig {
    private static _instance: AppConfig;
    private _config: Config;

    /**
     * Private constructor to avoid multiple instances.
     * 
     * @param {object} [_config] - Configuration object
     */
    private constructor(_config: Config) {
        console.log('AppConfig().constructor() || _config', _config);

        this._config = _config;
    }

    /**
     * Public method to initialise AppConfig.
     * 
     * If app manifest or settings aren't provided during initialisation, default values are injected to the configuration.
     * 
     * @param {object} [_config] - Optional configuration
     * @returns The instance of AppConfig
     */
    public static getInstance(_config?: Partial<Config>): AppConfig {
        console.log('AppConfig().getInstance()');

        if (!this._instance) {
            this._instance = new AppConfig({
                manifest: _config?.manifest || DEFAULT_MANIFEST,
                settings: _config?.settings || DEFAULT_SETTINGS,
            });
        }

        return this._instance;
    }

    /**
     * Public method to access app config
     * 
     * @returns App config
     */
    public getConfig(): Config {
        console.log('AppConfig().getConfig() || this._config = ', this._config);

        return this._config;
    }

    /**
     * Public method to access app settings
     * 
     * @returns App settings
     */
    public getSettings(): Settings {
        console.log('AppConfig().getSettings() || this._config.settings = ', this._config.settings);

        return this._config.settings;
    }
}