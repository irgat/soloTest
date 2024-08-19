import { Button } from '../../components/button/Button';
import { Events } from '../../../common/Events';
import { HomePageStyles } from './HomePage.styles';
import { Page } from '../Page';
import { PageIds } from '../Page.types';
import { Sprite } from 'pixi.js';

/**
 * The main page of the app that has two CTAs;
 * [PLAY] starts the game and [CREDITS] navigates to the credits page.
 */
export class HomePage extends Page {
    private background: Sprite;
    private creditsCTA: Button;
    private playCTA: Button;

    public constructor() {
        console.log('HomePage().constructor()');
        super(PageIds.HomePage);

        this.init();
    }

    private init = async () => {
        console.log('HomePage().init()');

        await this.loadAssets("");
    }

    protected override initPage = () => {
        console.log('HomePage().initPage()');

        // create background
        this.background = new Sprite(this.bgTextures[HomePageStyles.background]);
        this.addChild(this.background);

        // create credits CTA
        const creditsCTA_hitArea = HomePageStyles.creditsCTA.hitArea;
        const creditsCTA_setup = {
            default: this.uiTextures[HomePageStyles.creditsCTA.background],
            hover: this.uiTextures[HomePageStyles.creditsCTA.backgroundHover],
        }

        this.creditsCTA = new Button(creditsCTA_setup, creditsCTA_hitArea);
        this.creditsCTA.on(Events.MOUSE_CLICK, this.onCreditsCTASelected);
        this.addChild(this.creditsCTA);

        // create play CTA
        const playCTA_setup = {
            default: this.uiTextures[HomePageStyles.playCTA.background],
            hover: this.uiTextures[HomePageStyles.playCTA.backgroundHover],
        }

        this.playCTA = new Button(playCTA_setup);
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