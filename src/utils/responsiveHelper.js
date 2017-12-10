"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appWidth = 0;
var appHeight = 0;
exports.XSMALL = 600;
exports.SMALL = 840;
exports.MEDIUM = 960;
exports.LARGE = 1280;
exports.XLARGE = 1920;
function getScreen() {
    if (process.browser) {
        appWidth = document.documentElement.clientWidth;
        appHeight = document.documentElement.clientHeight;
    }
    const result = { appWidth, appHeight };
    return result;
}
exports.getScreen = getScreen;
