import { Container, Polygon, Sprite, Texture } from "pixi.js";
import { ButtonBackground, ButtonState, ButtonStates, Cursor } from "./BaseButton.types";
import { Events } from "../../../common/Events";

/**
 * The base button component.
 * 
 * The constructor expects a background texture to initialise the component, also accepts two optional parameters.
 */
export class BaseButton extends Container {
    private _bgTexture: Texture | ButtonBackground;

    private background: Sprite;
    private state: ButtonState;

    /**
     * 
     * @param {Texture | ButtonBackground} bgTexture - Background texture
     * @param {Polygon} [hitArea] - Optional hit area
     * @param {ButtonState} [initialState] - Optional button state
     */
    public constructor(bgTexture: Texture | ButtonBackground, hitArea?: Polygon, initialState?: ButtonState) {
        console.log('BaseButton().constructor() || bgTexture = ', bgTexture);
        console.log('BaseButton().constructor() || hitArea = ', hitArea);
        console.log('BaseButton().constructor() || initialState = ', initialState);

        super();

        if (hitArea) this.hitArea = hitArea;
        this.cursor = Cursor.Pointer;
        this.interactive = true;
        this.state = initialState ? initialState : ButtonStates.Default;

        this.updateContent(bgTexture);
        this.on(Events.MOUSE_OUT, this.onMouseOut);
        this.on(Events.MOUSE_OVER, this.onMouseOver);
    }

    /**
     * Public method to update the background texture.
     * 
     * @param {Texture | ButtonBackground} [bgTexture] - Optional background texture
     */
    public updateContent(bgTexture?: Texture | ButtonBackground) {
        if (bgTexture) this.bgTexture = bgTexture;
    }

    private onMouseOut = () => {
        console.log('BaseButton().onMouseOut()');

        this.updateState(ButtonStates.Default);
    }

    private onMouseOver = () => {
        console.log('BaseButton().onMouseOver()');

        this.updateState(ButtonStates.Hover);
    }

    /**
     * 
     * @param {ButtonState} state - Button state
     */
    private updateState = (state: ButtonState) => {
        console.log('BaseButton().updateState() || state = ', state);
        console.log('BaseButton().updateState() || this.state = ', this.state);

        // check if the state has changed
        if (this.state === state) return;

        this.state = state;

        this.updateBackground();
    }

    private updateBackground = () => {
        console.log('BaseButton().updateBackground() || this.background = ', this.background);

        if (this.background) {
            this.removeChild(this.background);
        }

        console.log('BaseButton().updateBackground() || this.state = ', this.state);
        console.log('BaseButton().updateBackground() || this.bgTexture = ', this.bgTexture);

        this.background = new Sprite(this.bgTexture);
        this.addChildAt(this.background, 0);
    }

    /**
     * 
     * @returns Background texture
     */
    public get bgTexture(): Texture {
        if (this.state === ButtonStates.Hover) {
            if (this._bgTexture instanceof Texture) {
                // handled downstream
                // todo: look for a better approach
            } else if (this._bgTexture.hover instanceof Texture) {
                return this._bgTexture.hover;
            }
        }

        return this._bgTexture instanceof Texture ? this._bgTexture : this._bgTexture.default;
    }

    /**
     * 
     * @param {Texture | ButtonBackground} value - Background texture
     */
    public set bgTexture(value: Texture | ButtonBackground) {
        this._bgTexture = value;

        this.updateBackground();
    }
}