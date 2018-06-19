import * as React from "react";
import Head from 'next/head';

export function HeaderComponent(props) {
    return (
        <React.Fragment>
            <Head>
                <title>dootoons.com</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-6158055273584096",enable_page_level_ads: true});` }} />
            </Head>
            {
                props.children
            }
        </React.Fragment>
    );
}