import { Button } from '../../components/button/Button';
import { CreditsPageStyles } from './CreditsPage.styles';
import { Events } from '../../../common/Events';
import { Page } from '../Page';
import { PageIds } from '../Page.types';
import { Sprite } from 'pixi.js';

/**
 * 
 */
export class CreditsPage extends Page {
    private background: Sprite;
    private backCTA: Button;

    public constructor() {
        console.log('CreditsPage().constructor()');
        super(PageIds.CreditsPage);

        this.init();
    }

    private init = async () => {
        await this.loadAssets('');
    }

    protected override initPage = () => {
        console.log('CreditsPage().initPage()');

        // create background
        this.background = new Sprite(this.bgTextures[CreditsPageStyles.background]);
        this.addChild(this.background);

        // create back CTA
        const backCTA_setup = {
            default: this.uiTextures[CreditsPageStyles.backCTA.background],
            hover: this.uiTextures[CreditsPageStyles.backCTA.backgroundHover],
        }

        this.backCTA = new Button(backCTA_setup);
        this.backCTA.position = CreditsPageStyles.backCTA.position;
        this.backCTA.on(Events.MOUSE_CLICK, this.onBackCTASelected);
        this.addChild(this.backCTA);
    }

    private onBackCTASelected = () => {
        this.backCTA.interactive = false;
        this.emit(Events.SELECTED, PageIds.HomePage);
    }
}