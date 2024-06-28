import { DEFAULT_SETTINGS, Settings } from "../types/App.types";

/**
 * A singleton class to manage global properties.
 * 
 * If app settings aren't provided during initialisation, default settings are applied.
 */
export class AppConfig {
    private static instance: AppConfig;
    private config: { [key: string]: any; };

    /**
     * Private constructor to avoid multiple instances.
     * 
     * @param {object} [_config] - Configuration object
     */
    private constructor(_config: { [key: string]: any }) {
        console.log("AppConfig().constructor() || _config", _config);

        this.config = { ..._config };
    }

    /**
     * Public method to initialise AppConfig.
     * 
     * If app settings aren't provided during initialisation, default settings are injected to the configuration.
     * If it's already been initialised, the new properties are injected to the configuration. The existing properties are updated as well.
     * 
     * @param {object} [_config] - Optional configuration
     * @returns The instance of AppConfig
     */
    public static getInstance(_config?: { [key: string]: any }): AppConfig {
        console.log("AppConfig().getInstance()");

        if (!AppConfig.instance) {
            // inject the settings if not provided during initialisation
            if (!_config || !_config.settings) {
                _config = { ...{ settings: DEFAULT_SETTINGS } };
            }

            AppConfig.instance = new AppConfig(_config);
        } else if (_config) {
            // inject the additional props
            this.instance.config = { ..._config };
        }

        return AppConfig.instance;
    }

    /**
     * Public method to access global properties
     * 
     * @param {string} _key - Target key to access the desired property
     * @returns Desired property
     */
    public getConfig(_key: string): any {
        console.log(`AppConfig().getConfig() || ${_key} = ${this.config[_key]}`);

        return this.config[_key];
    }

    /**
     * Public method to access app settings
     * 
     * @returns App settings
     */
    public getSettings(): Settings {
        console.log("AppConfig().getSettings() || this._config['settings'] = ", this.getConfig("settings"));

        return this.getConfig("settings");
    }
}