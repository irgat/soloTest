import { ApplicationOptions } from "pixi.js";

// This file is stored in "assets" folder. However, it's relocated to the root directory during build process.
// Please visit "webpack.common.js" and "webpack.dev.js" files to update the setup.
export const DEFAULT_MANIFEST: string = 'manifest.json';

export const DEFAULT_SETTINGS: Partial<ApplicationOptions> = {
    background: '#003300',
    width: 800,
    height: 600,
};
