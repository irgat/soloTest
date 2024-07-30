import { Point, Polygon } from "pixi.js";
import { UiTextures } from "../../../App.types";

export const HomePageStyles = {
    background: {
    },
    creditsCTA: {
        background: UiTextures.creditsButton_homePage,
        backgroundHover: UiTextures.creditsButton_homePage_hover,
        hitArea: new Polygon([0, 100, 0, 210, 210, 0, 100, 0]),
    },
    playCTA: {
        anchor: 0,
        height: 49,
        position: new Point(442, 452),
        width: 147,
    },
}