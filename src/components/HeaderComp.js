import * as React from "react";
import Head from 'next/head';
export function HeaderComponent(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Head, null,
            React.createElement("title", null, "all-animes.appspot.com"),
            React.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500" }),
            React.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }),
            React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
            (process.env.NODE_ENV == "production") ?
                React.createElement(React.Fragment, null,
                    React.createElement("meta", { name: "propeller", content: "1ca9c2781a277fe80eca4eb04c67365b" }),
                    React.createElement("script", { type: "text/javascript", src: "//go.oclaserver.com/apu.php?zoneid=1769415" })) : null),
        props.children));
}
