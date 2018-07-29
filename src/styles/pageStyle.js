"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("@material-ui/core/colors");
exports.styles = (theme) => {
    return ({
        root: {
            flex: 1,
            marginTop: `64px`,
            backgroundColor: colors_1.grey["100"],
            height: `calc(100vh - 64px)`,
        },
    });
};
