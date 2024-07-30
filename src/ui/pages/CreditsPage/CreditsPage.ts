import { Assets, Sprite } from 'pixi.js';
import { BaseButton } from '../../components/button/BaseButton';
import { BasePage } from '../BasePage';
import { BgTextures, Bundles, GameAssets } from '../../../App.types';
import { Events } from '../../../common/Events';
import { CreditsPageStyles } from './CreditsPage.styles';
import { PageIds } from '../Page.types';

/**
 * 
 */
export class CreditsPage extends BasePage {
    private background: Sprite;
    private backCTA: BaseButton;

    public constructor() {
        console.log('CreditsPage().constructor()');
        super(PageIds.CreditsPage);

        this.init();
    }

    private init = async () => {
        console.log('CreditsPage().init()');

        await this.initPage();
    }

    private initPage = async () => {
        console.log('CreditsPage().initPage()');

        // set textures
        const textures = await Assets.loadBundle(Bundles.GameAssets);

        if (!textures) {
            console.log('Failed to load texture');
        }

        console.log('CreditsPage().init() || textures = ', textures);

        const bgTextures = textures[GameAssets.bg].textures;
        const uiTextures = textures[GameAssets.ui].textures;

        if (!bgTextures || !uiTextures) {
            console.log('Failed to load BG and/or UI texture/s');
        }

        // create background
        this.background = new Sprite(bgTextures[BgTextures.creditsPage]);
        this.addChild(this.background);

        // create back CTA
        const backCTA_setup = {
            default: uiTextures[CreditsPageStyles.backCTA.background],
            hover: uiTextures[CreditsPageStyles.backCTA.backgroundHover],
        }

        this.backCTA = new BaseButton(backCTA_setup);
        this.backCTA.position = CreditsPageStyles.backCTA.position;
        this.backCTA.on(Events.MOUSE_CLICK, this.onbackCTASelected);
        this.addChild(this.backCTA);
    }

    private onbackCTASelected = () => {
        this.backCTA.interactive = false;
        this.emit(Events.SELECTED, PageIds.HomePage);
    }
}