import { Container } from "pixi.js";
import { PageId } from "./Page.types";

export class Page extends Container {
    protected pageId: PageId;

    public constructor(pageId: PageId) {
        super();
    }
}