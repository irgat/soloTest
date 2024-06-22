import { Application } from 'pixi.js';

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
    private settings: Settings = {
        background: {
            color: '#00FF00',
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
        console.log("App().constructor()");

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
    }
}

const app = new App();