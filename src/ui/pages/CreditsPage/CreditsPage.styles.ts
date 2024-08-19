import { BgTextures, UiTextures } from "../../../App.types";
import { CreditsPageTypes } from "./CreditsPage.types";
import { Point } from "pixi.js";

export const CreditsPageStyles: CreditsPageTypes = {
    background: BgTextures.creditsPage,
    backCTA: {
        background: UiTextures.backButton_creditsPage,
        backgroundHover: UiTextures.backButton_creditsPage_hover,
        position: new Point(658, 463),
    },
}