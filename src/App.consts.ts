import { Settings } from "./App.types";

// This file is stored in "assets" folder. However, it's relocated to the root directory during build process.
// Please visit "webpack.common.js" and "webpack.dev.js" files to update the setup.
export const DEFAULT_MANIFEST: string = 'manifest.json';

export const DEFAULT_SETTINGS: Settings = {
    background: {
        color: '#003300',
        url: '',
    },
    dimensions: {
        width: 800,
        height: 600,
    },
};
