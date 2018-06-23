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

    return (
        <div className={classes.root}>
            <HeaderComponent>
                <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
                    <Flexbox />
                    <div id="seasons">
                        <ContentList {...props}
                            onClickContent={(data) => onClickItem(props.router, data)}
                        />
                    </div>
                    <Flexbox />
                </Flexbox >
            </HeaderComponent>
        </div>
    );
}
const ChaptersPage = withRoot(withStyles(styles)(Chapters));
export default ComposeApollo(withRouter(ChaptersPage));
