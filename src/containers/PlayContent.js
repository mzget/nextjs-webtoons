"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PlayContent = /** @class */ (function (_super) {
    __extends(PlayContent, _super);
    function PlayContent(props) {
        return _super.call(this, props) || this;
    }
    PlayContent.prototype.render = function () {
        var _a = this.props, name = _a.name, ep_name = _a.ep_name, season = _a.season, src = _a.src;
        return (React.createElement("div", null,
            React.createElement("p", null, name),
            React.createElement("p", null, season),
            React.createElement("p", null, ep_name),
            React.createElement("video", { width: "320", height: "240", controls: true, src: src }, "Sorry, your browser doesn't support embedded videos.")));
    };
    return PlayContent;
}(React.Component));
exports.default = PlayContent;
