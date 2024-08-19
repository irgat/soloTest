import { Button } from '../../components/button/Button';
import { GamePageStyles } from './GamePage.styles';
import { Events } from '../../../common/Events';
import { Page } from '../Page';
import { PageIds } from '../Page.types';
import { Sprite } from 'pixi.js';

/**
 * 
 */
export class GamePage extends Page {
    private background: Sprite;
    private newGameCTA: Button;
    private resultChartCTA: Button;

    public constructor() {
        console.log('GamePage().constructor()');
        super(PageIds.GamePage);

        this.init();
    }

    private init = async () => {
        await this.loadAssets('');
    }

    protected override initPage = () => {
        console.log('GamePage().initPage()');

        // create background
        this.background = new Sprite(this.bgTextures[GamePageStyles.background]);
        this.addChild(this.background);

        // create new game CTA
        const newGameCTA_setup = {
            default: this.uiTextures[GamePageStyles.newGameCTA.background],
            hover: this.uiTextures[GamePageStyles.newGameCTA.backgroundHover],
        }

        this.newGameCTA = new Button(newGameCTA_setup);
        this.newGameCTA.position = GamePageStyles.newGameCTA.position;
        this.newGameCTA.on(Events.MOUSE_CLICK, this.onNewGameCTASelected);
        this.addChild(this.newGameCTA);

        // create result chart CTA
        const resultChartCTA_setup = {
            default: this.uiTextures[GamePageStyles.resultChartCTA.background],
            hover: this.uiTextures[GamePageStyles.resultChartCTA.backgroundHover],
        }

        this.resultChartCTA = new Button(resultChartCTA_setup);
        this.resultChartCTA.position = GamePageStyles.resultChartCTA.position;
        this.resultChartCTA.on(Events.MOUSE_CLICK, this.onResultChartCTASelected);
        this.addChild(this.resultChartCTA);
    }

    private onNewGameCTASelected = () => {
        this.newGameCTA.interactive = false;
        this.emit(Events.SELECTED, PageIds.GamePage);
    }

    private onResultChartCTASelected = () => {
        this.resultChartCTA.interactive = false;
        this.emit(Events.SELECTED, PageIds.ResultChartPage);
    }
}