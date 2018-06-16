import * as React from "react";
import Flexbox from "flexbox-react";
import Head from 'next/head';
import { ComposeApollo } from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";
import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";
const Index = (props) => (React.createElement("div", null,
    React.createElement(Head, null,
        React.createElement("title", null, "dootoons.com"),
        React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
        React.createElement("script", { async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }),
        React.createElement("script", { dangerouslySetInnerHTML: { __html: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-6158055273584096",enable_page_level_ads: true});` } })),
    React.createElement(Flexbox, { flexDirection: "row", justifyContent: "center", height: "100%" },
        React.createElement(Flexbox, null),
        React.createElement("div", { id: "home" },
            console.log("Home page", props, getScreen()),
            React.createElement(Programs, null)),
        React.createElement(Flexbox, null))));
const HomePage = withMaterialUI(Index);
export default ComposeApollo(HomePage);
