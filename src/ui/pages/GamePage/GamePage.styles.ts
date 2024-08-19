import { BgTextures, UiTextures } from "../../../App.types";
import { GamePageTypes } from "./GamePage.types";
import { Point } from "pixi.js";

export const GamePageStyles: GamePageTypes = {
    background: BgTextures.gamePage,
    board: {
        halo: UiTextures.halo,
        pawn: UiTextures.pawn,
        pawnHover: UiTextures.pawnHover,
    },
    newGameCTA: {
        background: UiTextures.newGameButton_gamePage,
        backgroundHover: UiTextures.newGameButton_gamePage_hover,
        position: new Point(825, 460),
    },
    resultChartCTA: {
        background: UiTextures.resultChartButton_gamePage,
        backgroundHover: UiTextures.resultChartButton_gamePage_hover,
        position: new Point(825, 50),
    },
}