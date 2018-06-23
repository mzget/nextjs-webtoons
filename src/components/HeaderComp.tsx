import * as React from "react";
import Head from 'next/head';

export function HeaderComponent(props) {
    return (
        <React.Fragment>
            <Head>
                <title>all-animes.appspot.com</title>

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="propeller" content="1ca9c2781a277fe80eca4eb04c67365b" />
                <script type="text/javascript" src="//go.oclaserver.com/apu.php?zoneid=1769415"></script>
            </Head>
            {
                props.children
            }
        </React.Fragment>
    );
}