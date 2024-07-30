import { BgTextures, UiTextures } from "../../../App.types";
import { Point } from "pixi.js";

export const CreditsPageStyles = {
    background: BgTextures.creditsPage,
    backCTA: {
        background: UiTextures.backButton_creditsPage,
        backgroundHover: UiTextures.backButton_creditsPage_hover,
        position: new Point(658, 463),
    },
}