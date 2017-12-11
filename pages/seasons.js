"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const withMaterialUI_1 = require("../lib/withMaterialUI");
const withData_1 = require("../lib/withData");
const router_1 = require("next/router");
const flexbox_react_1 = require("flexbox-react");
const head_1 = require("next/head");
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
            React.createElement(head_1.default, null,
                React.createElement("title", null, "dootoons.com"),
                React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
                React.createElement("script", { async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }),
                React.createElement("script", { dangerouslySetInnerHTML: { __html: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-6158055273584096",enable_page_level_ads: true});` } })),
            React.createElement(flexbox_react_1.default, { flexDirection: "row", justifyContent: "center", height: "100%" },
                React.createElement(flexbox_react_1.default, null),
                React.createElement("div", { id: "seasons" },
                    React.createElement(ContentList_1.default, Object.assign({}, this.props, { onClickContent: this.onClickItem }))),
                React.createElement(flexbox_react_1.default, null))));
    }
}
const SeasonPage = withMaterialUI_1.default(Seasons);
exports.default = withData_1.default(SeasonPage);
