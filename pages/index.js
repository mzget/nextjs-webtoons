"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is the Link API
var link_1 = require("next/link");
var React = require("react");
var PlayContent_1 = require("../src/containers/PlayContent");
var Index = function () { return (React.createElement("div", null,
    React.createElement(link_1.default, { href: "/about" },
        React.createElement("button", null, "About Page")),
    React.createElement("p", null, "Hello Next.js"),
    React.createElement(PlayContent_1.default, { name: "one pieces", season: "18", ep_name: "18" }))); };
exports.default = Index;
