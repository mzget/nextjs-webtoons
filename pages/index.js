"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const flexbox_react_1 = require("flexbox-react");
const head_1 = require("next/head");
const withData_1 = require("../lib/withData");
const withMaterialUI_1 = require("../lib/withMaterialUI");
const responsiveHelper_1 = require("../src/utils/responsiveHelper");
const Programs_1 = require("../src/containers/Programs");
const Index = (props) => (React.createElement("div", null,
    React.createElement(head_1.default, null,
        React.createElement("title", null, "dootoons.com"),
        React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
        React.createElement("script", { async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }),
        React.createElement("script", { dangerouslySetInnerHTML: { __html: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-6158055273584096",enable_page_level_ads: true});` } })),
    React.createElement(flexbox_react_1.default, { flexDirection: "row", justifyContent: "center", height: "100%" },
        React.createElement(flexbox_react_1.default, null),
        React.createElement("div", { id: "home" },
            console.log("LOG", props, responsiveHelper_1.getScreen()),
            React.createElement(Programs_1.default, null)),
        React.createElement(flexbox_react_1.default, null))));
const HomePage = withMaterialUI_1.default(Index);
const HomeWithData = withData_1.default(HomePage);
exports.default = HomeWithData;
