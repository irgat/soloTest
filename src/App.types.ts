export interface Config {
    manifest: string,
    settings: Settings,
}

export interface Settings {
    background: {
        color: string,
        url: string,
    },
    dimensions: {
        width: number,
        height: number,
    },
}

// manifest.json
export enum Bundles {
    Preloader = 'preloader',
    SplashPage = 'splashPage',
    GameAssets = 'gameAssets',
}

export enum FontFamily {
    MonolineScript = 'MonolineScript',
    TallTrees = 'TallTrees',
}
// manifest.json