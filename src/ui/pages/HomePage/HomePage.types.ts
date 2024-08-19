import { Point, Polygon } from "pixi.js";

export interface HomePageTypes {
    background: string,
    creditsCTA: {
        background: string,
        backgroundHover: string,
        hitArea: Polygon,
    },
    playCTA: {
        background: string,
        backgroundHover: string,
        position: Point,
    },
}