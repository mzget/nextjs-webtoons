import * as React from "react";
import WithMaterialUI from "../lib/withMaterialUI";
import { ComposeData } from "../lib/withData";
import { List, ListItem } from "material-ui/List";

import { withRouter, RouterProps } from "next/router";
import Flexbox from "flexbox-react";
import Head from 'next/head';

import { getScreen } from "../src/utils/responsiveHelper";
import { IContentProps, IRouteProps } from "../src/utils/structs";
import ContentList from "../src/components/ContentList";

interface ISeasonPageProps extends IContentProps, IRouteProps { }


function onClickItem(router: RouterProps, data: any) {
    router.push({
        pathname: "/play",
        query: { ep: `${data}` },
    });
}

function Chapters(props: { router: RouterProps }) {
    return (
        <div>
            <Head>
                <title>dootoons.com</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-6158055273584096",enable_page_level_ads: true});` }} />
            </Head>
            <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
                <Flexbox />
                <div id="seasons">
                    <ContentList {...props}
                        onClickContent={(data) => onClickItem(props.router, data)}
                    />
                </div>
                <Flexbox />
            </Flexbox >
        </div>
    );
}

const ChapterPage = WithMaterialUI(withRouter(Chapters));
export default ComposeData(ChapterPage);
