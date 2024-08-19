import { Assets, Container, Texture } from "pixi.js";
import { Bundles, GameAssets, Textures } from "../../App.types";
import { PageId } from "./Page.types";

export class Page extends Container {
    private _pageId: PageId;

    protected bgTextures: Record<string | number, Texture>;
    protected uiTextures: Record<string | number, Texture>;

    public constructor(pageId: PageId) {
        super();

        this.pageId = pageId;
    }

    protected loadAssets = async (url: string) => {
        console.log('Page().loadAssets()');

        // set textures
        const textures: Textures = await Assets.loadBundle(Bundles.GameAssets);

        if (!textures) {
            console.log('Failed to load texture');
        }

        console.log('Page().loadAssets() || textures = ', textures);

        this.bgTextures = textures[GameAssets.bg].textures;
        this.uiTextures = textures[GameAssets.ui].textures;

        if (!this.bgTextures || !this.uiTextures) {
            console.log('Failed to load BG and/or UI texture/s');
        }

        this.initPage();
    }

    protected initPage = () => { }

    public get pageId(): PageId {
        return this._pageId;
    }

    public set pageId(value: PageId) {
        this._pageId = value;
    }
}