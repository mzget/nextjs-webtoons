import * as React from "react";
import Head from 'next/head';
export function HeaderComponent(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Head, null,
            React.createElement("title", null, "dootoons.com"),
            React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
            React.createElement("script", { async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }),
            React.createElement("script", { dangerouslySetInnerHTML: { __html: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-6158055273584096",enable_page_level_ads: true});` } })),
        props.children));
}
