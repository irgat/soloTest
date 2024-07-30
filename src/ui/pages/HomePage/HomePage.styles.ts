import { BgTextures, UiTextures } from "../../../App.types";
import { Point, Polygon } from "pixi.js";

export const HomePageStyles = {
    background: BgTextures.homePage,
    creditsCTA: {
        background: UiTextures.creditsButton_homePage,
        backgroundHover: UiTextures.creditsButton_homePage_hover,
        hitArea: new Polygon([0, 100, 0, 210, 210, 0, 100, 0]),
    },
    playCTA: {
        background: UiTextures.playButton_homePage,
        backgroundHover: UiTextures.playButton_homePage_hover,
        position: new Point(442, 452),
    },
}