"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const flexbox_react_1 = require("flexbox-react");
const withData_1 = require("../lib/withData");
const withMaterialUI_1 = require("../lib/withMaterialUI");
const responsiveHelper_1 = require("../src/utils/responsiveHelper");
const Programs_1 = require("../src/containers/Programs");
const Index = (props) => (React.createElement(flexbox_react_1.default, { flexDirection: "row", justifyContent: "center", height: "100%" },
    React.createElement(flexbox_react_1.default, null),
    React.createElement("div", { id: "home" },
        console.log("LOG", props, responsiveHelper_1.getScreen()),
        React.createElement(Programs_1.default, null)),
    React.createElement(flexbox_react_1.default, null)));
const HomePage = withMaterialUI_1.default(Index);
const HomeWithData = withData_1.default(HomePage);
exports.default = HomeWithData;
