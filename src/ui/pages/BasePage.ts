import { Container } from "pixi.js";
import { PageId } from "./Page.types";

export class BasePage extends Container {
    protected pageId: PageId;

    public constructor(pageId: PageId) {
        super();
    }
}