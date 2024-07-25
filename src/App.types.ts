import { ApplicationOptions } from "pixi.js";

export interface Config {
    manifest: string,
    settings: Partial<ApplicationOptions>,
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