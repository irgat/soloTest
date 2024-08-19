import { Container } from "pixi.js";
import { PageId } from "./Page.types";

export class Page extends Container {
    private _pageId: PageId;

    public constructor(pageId: PageId) {
        super();

        this.pageId = pageId;
    }

    public get pageId(): PageId {
        return this._pageId;
    }

    public set pageId(value: PageId) {
        this._pageId = value;
    }
}