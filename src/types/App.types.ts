export interface Settings {
    background: {
        color: string,
        url: string,
    },
    dimensions: {
        width: number,
        height: number,
    },
    manifest: string,
}

export const DEFAULT_SETTINGS: Settings = {
    background: {
        color: '#333333',
        url: '',
    },
    dimensions: {
        width: 1024,
        height: 600,
    },
    manifest: 'manifest.json',
};

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