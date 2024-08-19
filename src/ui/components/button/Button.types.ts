import { Texture } from "pixi.js";

export type ButtonText = {
    default: string,
    hover: string,
}

export type ButtonBackground = {
    default: Texture,
    hover: Texture,
}

export type ButtonState = ButtonStates.Default | ButtonStates.Hover | ButtonStates.Selected;

export enum ButtonStates {
    Default = 'default',
    Hover = 'hover',
    Selected = 'selected',
}

export enum Cursor {
    Pointer = 'pointer',
}