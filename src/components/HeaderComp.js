"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
function HeaderComponent(props) {
    return (<React.Fragment>
            <head_1.default>
                <title>all-animes.appspot.com</title>

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                {(process.env.NODE_ENV == "production") ?
        <React.Fragment>
                            <meta name="propeller" content="1ca9c2781a277fe80eca4eb04c67365b"/>
                            <script type="text/javascript" src="//go.oclaserver.com/apu.php?zoneid=1769415"></script>
                        </React.Fragment> : null}
            </head_1.default>
            {props.children}
        </React.Fragment>);
}
exports.HeaderComponent = HeaderComponent;
