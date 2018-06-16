import * as React from "react";
import Flexbox from "flexbox-react";
import Head from 'next/head';

import { ComposeApollo } from "../lib/withData";
import withMaterialUI from "../lib/withMaterialUI";

import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";


const Index = (props: any) => (
    <div>
        <Head>
            <title>dootoons.com</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-6158055273584096",enable_page_level_ads: true});` }} />
        </Head>
        <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
            <Flexbox />
            <div id="home">
                {
                    console.log("Home page", props, getScreen())
                }
                <Programs />
            </div>
            <Flexbox />
        </Flexbox >
    </div>
);

const HomePage = withMaterialUI(Index);
export default ComposeApollo(HomePage);
