"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const withMaterialUI_1 = require("../lib/withMaterialUI");
exports.About = () => (React.createElement("div", null,
    React.createElement("p", null, "This is the about page")));
exports.default = withMaterialUI_1.default(exports.About);
