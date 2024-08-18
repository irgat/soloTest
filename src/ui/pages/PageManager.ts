import { Application } from "pixi.js";
import { Page } from "./Page";

/**
 * The controller class to manage the page navigation.
 */
export class PageManager {
    private app: Application;
    private currentPage: Page;
    private currentPageIndex: number = -1;
    private pages: Array<Page> = [];

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
     * @param {boolean} isPopup - Flag to stack or replace the new page.
     */
    public addPage(page: Page, isPopup: boolean = false) {
        console.log('PageManager().addPage() || page', page);

        if (!isPopup) {
            this.removeTheTopMostPage();
        }

        this.pages.push(page);
        this.app.stage.addChild(page);
        this.currentPage = page;
        this.currentPageIndex = this.pages.length - 1;

        console.log('PageManager().addPage() || this.currentPage', this.currentPage);
        console.log('PageManager().addPage() || this.currentPageIndex', this.currentPageIndex);
    }

    /**
     * 
    */
    public removeTheTopMostPage() {
        console.log('PageManager().removeTheTopMostPage()');

        this.removePageByIndex(this.app.stage.children.length - 1);
    }

    /**
     * 
     * @param {number} index - Page index to be removed from the stage.
     */
    public removePageByIndex(index: number) {
        console.log('PageManager().removePageByIndex() || index', index);

        if (index < 0) return;

        this.app.stage.removeChildAt(index);
        this.pages.splice(index, 1);
        this.currentPageIndex = this.app.stage.children.length - 1;
        this.currentPage = this.pages[this.currentPageIndex];

        console.log('PageManager().removePageByIndex() || this.currentPage', this.currentPage);
        console.log('PageManager().removePageByIndex() || this.currentPageIndex', this.currentPageIndex);
    }
}