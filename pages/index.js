"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is the Link API
const link_1 = require("next/link");
const React = require("react");
const withData_1 = require("../lib/withData");
const withMaterialUI_1 = require("../lib/withMaterialUI");
const PlayContent_1 = require("../src/containers/PlayContent");
const Index = (props) => (React.createElement("div", null,
    console.log("LOG", props),
    React.createElement(link_1.default, { href: "/about" },
        React.createElement("button", null, "About Page")),
    React.createElement(PlayContent_1.default, null)));
const HomePage = withMaterialUI_1.default(Index);
const HomeWithData = withData_1.default(HomePage);
exports.default = HomeWithData;
