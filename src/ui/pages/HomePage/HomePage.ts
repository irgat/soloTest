import { Assets, Sprite } from 'pixi.js';
import { BasePage } from '../BasePage';
import { BgTextures, Bundles, GameAssets, UiTextures } from '../../../App.types';
import { Events } from '../../../common/Events';
import { HomePageStyles } from './HomePage.styles';
import { PageIds } from '../Page.types';

/**
 * 
 */
export class HomePage extends BasePage {
    private background: Sprite;
    private creditsCTA: Sprite;

    public constructor() {
        console.log('HomePage().constructor()');
        super(PageIds.HomePage);

        this.init();
    }

    private init = async () => {
        console.log('HomePage().init()');

        await this.initPage();
    }

    private initPage = async () => {
        console.log('HomePage().initPage()');

        // set textures
        const textures = await Assets.loadBundle(Bundles.GameAssets);

        if (!textures) {
            console.log('Failed to load texture');
        }

        console.log('HomePage().init() || textures = ', textures);

        const bgTextures = textures[GameAssets.bg].textures;
        const uiTextures = textures[GameAssets.ui].textures;

        if (!bgTextures || !uiTextures) {
            console.log('Failed to load BG and/or UI texture/s');
        }

        // add background
        this.background = new Sprite(bgTextures[BgTextures.homePage]);
        this.addChild(this.background);

        // add credits CTA
        this.creditsCTA = new Sprite(uiTextures[UiTextures.creditsButton_homePage]);
        this.creditsCTA.anchor = HomePageStyles.creditsCTA.anchor;
        this.creditsCTA.on(Events.MOUSE_CLICK, this.onCreditsCTASelected);
        this.addChild(this.creditsCTA);
    }

    private onCreditsCTASelected = () => {
        this.emit(Events.SELECTED, PageIds.CreditsPage)
    }
}