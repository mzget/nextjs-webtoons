var appWidth: number = 0;
var appHeight = 0;

export const XSMALL = 600;
export const SMALL = 840;
export const MEDIUM = 960;
export const LARGE = 1280;
export const XLARGE = 1920;

export function getScreen() {
    if ((process as any).browser) {
        appWidth = document.documentElement.clientWidth;
        appHeight = document.documentElement.clientHeight;
    }

    const result = { appWidth, appHeight };

    return result;
}