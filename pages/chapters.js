import * as React from "react";
import WithMaterialUI from "../lib/withMaterialUI";
import { ComposeData } from "../lib/withData";
import { withRouter } from "next/router";
import Flexbox from "flexbox-react";
import Head from 'next/head';
import ContentList from "../src/components/ContentList";
function onClickItem(router, data) {
    router.push({
        pathname: "/play",
        query: { ep: `${data}` },
    });
}
function Chapters(props) {
    return (React.createElement("div", null,
        React.createElement(Head, null,
            React.createElement("title", null, "dootoons.com"),
            React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
            React.createElement("script", { async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }),
            React.createElement("script", { dangerouslySetInnerHTML: { __html: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-6158055273584096",enable_page_level_ads: true});` } })),
        React.createElement(Flexbox, { flexDirection: "row", justifyContent: "center", height: "100%" },
            React.createElement(Flexbox, null),
            React.createElement("div", { id: "seasons" },
                React.createElement(ContentList, Object.assign({}, props, { onClickContent: (data) => onClickItem(props.router, data) }))),
            React.createElement(Flexbox, null))));
}
const ChapterPage = WithMaterialUI(withRouter(Chapters));
export default ComposeData(ChapterPage);
