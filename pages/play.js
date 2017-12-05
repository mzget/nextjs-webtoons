"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const withData_1 = require("../lib/withData");
const withMaterialUI_1 = require("../lib/withMaterialUI");
const PlayContent_1 = require("../src/containers/PlayContent");
const Index = (props) => (React.createElement("div", null,
    React.createElement(PlayContent_1.default, null)));
const Page = withMaterialUI_1.default(Index);
const PlayPageWithData = withData_1.default(Page);
exports.default = PlayPageWithData;
