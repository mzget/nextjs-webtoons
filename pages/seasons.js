"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const withMaterialUI_1 = require("../lib/withMaterialUI");
const withData_1 = require("../lib/withData");
const router_1 = require("next/router");
const ContentList_1 = require("../src/components/ContentList");
class Seasons extends React.Component {
    componentWillMount() {
        this.onClickItem = this.onClickItem.bind(this);
    }
    onClickItem(data) {
        router_1.default.push({
            pathname: "/play",
            query: { ep: `${data}` },
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(ContentList_1.default, Object.assign({}, this.props, { onClickContent: this.onClickItem }))));
    }
}
const SeasonPage = withMaterialUI_1.default(Seasons);
exports.default = withData_1.default(SeasonPage);
