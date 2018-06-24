import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../lib/withRoot';
import { ComposeApollo } from "../lib/withData";

import { withRouter, RouterProps } from "next/router";

import { getScreen } from "../src/utils/responsiveHelper";
import { IContentProps, IRouteProps } from "../src/utils/structs";
import ContentList from "../src/components/ContentList";
import { HeaderComponent } from "../src/components/HeaderComp";
import { AppBarUI } from "../src/components/AppBar"

interface ISeasonPageProps extends IContentProps, IRouteProps { }

const styles = theme => ({
    root: {
    },
});

function onClickItem(router: RouterProps, data: any) {
    router.push({
        pathname: "/play",
        query: { ep: `${data}` },
    });
}

function Chapters(props: { router: RouterProps, classes }) {
    const { classes } = props;
    console.log("Chapters page", props, getScreen())
    console.log("browser", (process as any).browser, process.env.NODE_ENV);

    return (
        <HeaderComponent>
            <AppBarUI />
            <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
                <Flexbox />
                <div id="Chapters">
                    <ContentList {...props}
                        onClickContent={(data) => onClickItem(props.router, data)}
                    />
                </div>
                <Flexbox />
            </Flexbox >
        </HeaderComponent>
    );
}
const ChaptersPage = withRoot(withStyles(styles)(Chapters));
export default ComposeApollo(withRouter(ChaptersPage));
