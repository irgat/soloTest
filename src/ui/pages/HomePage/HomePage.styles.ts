import { Point } from "pixi.js";
import { UiTextures } from "../../../App.types";

export const HomePageStyles = {
    background: {
    },
    creditsCTA: {
        anchor: 0,
        background: UiTextures.creditsButton_homePage,
    },
    playCTA: {
        anchor: 0,
        height: 49,
        position: new Point(442, 452),
        width: 147,
    },
}