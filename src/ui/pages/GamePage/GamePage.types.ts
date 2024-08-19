import { Point } from "pixi.js";

export interface GamePageTypes {
    background: string,
    board: {
        halo: string,
        pawn: string,
        pawnHover: string,
    },
    newGameCTA: {
        background: string,
        backgroundHover: string,
        position: Point,
    },
    resultChartCTA: {
        background: string,
        backgroundHover: string,
        position: Point,
    },
}