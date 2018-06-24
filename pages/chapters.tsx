import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from '@material-ui/core/styles';
import { withRouter, RouterProps } from "next/router";

import withRoot from '../lib/withRoot';
import { ComposeApollo } from "../lib/withData";

import { getScreen, SMALL, XSMALL } from "../src/utils/responsiveHelper";
import { IContentProps, IRouteProps } from "../src/utils/structs";
import ContentList from "../src/components/ContentList";
import { HeaderComponent } from "../src/components/HeaderComp";
import { AppBarUI } from "../src/components/AppBar"

interface ISeasonPageProps extends IContentProps, IRouteProps { }


const programDiv = (getScreen().appWidth <= XSMALL) ? "100%" : `${XSMALL}px`;
const styles = theme => ({
    root: {
        width: `${programDiv}`
    },
    list: {
        flex: 1,
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

    return (
        <HeaderComponent>
            <AppBarUI />
            <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
                <div id="Chapters" className={classes.root}>
                    <div>
                        <ContentList {...props}
                            onClickContent={(data) => onClickItem(props.router, data)}
                        />
                    </div>
                </div>
            </Flexbox >
        </HeaderComponent>
    );
}

const ChaptersPage = withRoot(withStyles(styles, { withTheme: true })(withRouter(Chapters)));
export default ComposeApollo(ChaptersPage);
