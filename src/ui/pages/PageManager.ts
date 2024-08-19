import { Application } from "pixi.js";
import { Page } from "./Page";
import { PageId } from "./Page.types";

/**
 * The controller class to manage the page navigation.
 */
export class PageManager {
    private app: Application;
    private currentPage?: Page;
    private pages: { [key: string]: Page } = {};

    /**
     * 
     * @param {Application} app - Pixi app for reference to the stage.
     */
    public constructor(app: Application) {
        console.log('PageManager()');
        this.app = app;
    }

    /**
     * 
     * @param {Page} page - Page to be added to the stage.
     * @param {boolean} addToHistory - Flag to stack or replace the new page.
     */
    public addPage(page: Page, addToHistory: boolean = false) {
        console.log('PageManager().addPage() || page', page);
        console.log('PageManager().addPage() || addToHistory', addToHistory);

        if (!addToHistory && this.currentPage) {
            this.removePage(this.currentPage);
        }

        this.app.stage.addChild(page);
        this.currentPage = page
        this.pages[page.pageId] = page;

        console.log('PageManager().addPage() || this.currentPage', this.currentPage);
    }

    /**
     * 
     * @param {Page} page - Page to be removed from the stage.
     */
    public removePage(page: Page) {
        console.log('PageManager().removePage() || page', page);
        console.log('PageManager().removePage() || this.pages', this.pages);

        if (this.pages.hasOwnProperty(page.pageId)) {
            // remove the page from stage
            this.app.stage.removeChild(page);
            // remove the page reference
            delete this.pages[page.pageId];
        }

        console.log('PageManager().removePage() || this.app.stage.children.length', this.app.stage.children.length);

        if (this.app.stage.children.length > 0) {
            this.currentPage = this.app.stage.getChildAt(this.app.stage.children.length - 1) as Page;
        } else {
            this.currentPage = undefined;
        }

        console.log('PageManager().removePage() || this.pages', this.pages);
    }

    /**
     * 
     * @param {PageId} pageId - Page to be removed from the stage.
     */
    public removePageById(pageId: PageId) {
        console.log('PageManager().removePageById() || pageId', pageId);

        if (this.pages.hasOwnProperty(pageId)) {
            this.removePage(this.pages[pageId]);
        }
    }
}