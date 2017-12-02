"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is the Link API
const link_1 = require("next/link");
const React = require("react");
const withData_1 = require("../lib/withData");
const PlayContent_1 = require("../src/containers/PlayContent");
const Index = (props) => (React.createElement("div", null,
    console.log(props),
    React.createElement(link_1.default, { href: "/about" },
        React.createElement("button", null, "About Page")),
    React.createElement(PlayContent_1.default, null)));
exports.default = withData_1.default((props) => React.createElement(Index, Object.assign({}, props)));
