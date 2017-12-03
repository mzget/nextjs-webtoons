"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const withData_1 = require("../lib/withData");
const withMaterialUI_1 = require("../lib/withMaterialUI");
const PlayContent_1 = require("../src/containers/PlayContent");
const Index = (props) => (React.createElement("div", null,
    console.log("LOG", props),
    React.createElement(PlayContent_1.default, null)));
const HomePage = withMaterialUI_1.default(Index);
const HomeWithData = withData_1.default(HomePage);
exports.default = HomeWithData;
