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

export enum GameAssets {
    bg = 'bg',
    ui = 'ui',
}
// manifest.json

// spriteSheets/bg.json
export enum BgTextures {
    creditsPage = 'creditsPage.png',
    gamePage = 'gamePage.png',
    homePage = 'homePage.png',
    resultChartPage = 'resultChartPage.png',
    resultPage = 'resultPage.png',
}

// spriteSheets/ui.json
export enum UiTextures {
    backButton_creditsPage = 'backButton_creditsPage.png',
    backButton_resultChartPage = 'backButton_resultChartPage.png',
    backButton_resultPage = 'backButton_resultPage.png',
    creditsButton_homePage = 'creditsButton_homePage.png',
    creditsButton_homePage_hover = 'creditsButton_homePage_hover.png',
    gameOverButton_gamePage = 'gameOverButton_gamePage.png',
    halo = 'halo.png',
    newGameButton_gamePage = 'newGameButton_gamePage.png',
    newGameButton_resultChartPage = 'newGameButton_resultChartPage.png',
    pawn = 'pawn.png',
    pawnHover = 'pawnHover.png',
    playButton_homePage = 'playButton_homePage.png',
    playButton_homePage_hover = 'playButton_homePage_hover.png',
    point_1 = '1.png',
    point_2 = '2.png',
    point_3 = '3.png',
    point_4 = '4.png',
    point_5 = '5.png',
    point_6 = '6.png',
    point_7 = '7.png',
    point_8 = '8.png',
    point_9 = '9.png',
    px_black = '1px_black.png',
    px_transparent = '1px_transparent.png',
    px_white = '1px_white.png',
    resultChartButton_gamePage = 'resultChartButton_gamePage.png',
}