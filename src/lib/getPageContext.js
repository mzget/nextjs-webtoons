"use strict";
/* eslint-disable no-underscore-dangle */
Object.defineProperty(exports, "__esModule", { value: true });
const jss_1 = require("jss");
const styles_1 = require("@material-ui/core/styles");
const colors_1 = require("@material-ui/core/colors");
const green_1 = require("@material-ui/core/colors/green");
// A theme with custom primary and secondary color.
// It's optional.
const theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            light: colors_1.indigo[300],
            main: colors_1.indigo[500],
            dark: colors_1.indigo[700],
        },
        secondary: {
            light: green_1.default[300],
            main: green_1.default[500],
            dark: green_1.default[700],
        }
    },
});
function createPageContext() {
    return {
        theme,
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new jss_1.SheetsRegistry(),
        // The standard class name generator.
        generateClassName: styles_1.createGenerateClassName(),
    };
}
function getPageContext() {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!process.browser) {
        return createPageContext();
    }
    // Reuse context on the client-side.
    if (!global.__INIT_MATERIAL_UI__) {
        global.__INIT_MATERIAL_UI__ = createPageContext();
    }
    return global.__INIT_MATERIAL_UI__;
}
exports.default = getPageContext;
