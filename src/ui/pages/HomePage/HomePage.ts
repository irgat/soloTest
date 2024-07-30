import { Assets, Sprite } from 'pixi.js';
import { BaseButton } from '../../components/button/BaseButton';
import { BasePage } from '../BasePage';
import { BgTextures, Bundles, GameAssets, UiTextures } from '../../../App.types';
import { Events } from '../../../common/Events';
import { HomePageStyles } from './HomePage.styles';
import { PageIds } from '../Page.types';

/**
 * The main page of the app that has two CTAs;
 * [PLAY] starts the game and [CREDITS] navigates to the credits page.
 */
export class HomePage extends BasePage {
    private background: Sprite;
    private creditsCTA: BaseButton;
    private playCTA: BaseButton;

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

        // create background
        this.background = new Sprite(bgTextures[BgTextures.homePage]);
        this.addChild(this.background);

        // create credits CTA
        const creditsCTA_hitArea = HomePageStyles.creditsCTA.hitArea;
        const creditsCTA_setup = {
            default: uiTextures[UiTextures.creditsButton_homePage],
            hover: uiTextures[UiTextures.creditsButton_homePage_hover],
        }

        this.creditsCTA = new BaseButton(creditsCTA_setup, creditsCTA_hitArea);
        this.creditsCTA.on(Events.MOUSE_CLICK, this.onCreditsCTASelected);
        this.addChild(this.creditsCTA);

        // create play CTA
        const playCTA_setup = {
            default: uiTextures[UiTextures.playButton_homePage],
            hover: uiTextures[UiTextures.playButton_homePage_hover],
        }

        this.playCTA = new BaseButton(playCTA_setup);
        this.playCTA.position = HomePageStyles.playCTA.position;
        this.playCTA.on(Events.MOUSE_CLICK, this.onPlayCTASelected);
        this.addChild(this.playCTA);
    }

    private onCreditsCTASelected = () => {
        this.emit(Events.SELECTED, PageIds.CreditsPage);
    }

    private onPlayCTASelected = () => {
        this.emit(Events.SELECTED, PageIds.GamePage);
    }
}