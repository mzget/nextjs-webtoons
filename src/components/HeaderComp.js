import * as React from "react";
import Head from 'next/head';
export function HeaderComponent(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Head, null,
            React.createElement("title", null, "all-animes.appspot.com"),
            React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
            React.createElement("meta", { name: "propeller", content: "1ca9c2781a277fe80eca4eb04c67365b" })),
        props.children));
}
