import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter, RouterProps } from "next/router";

import withMaterial from "../src/lib/withMaterial";
import { getScreen, SMALL, XSMALL } from "../src/utils/responsiveHelper";
import ContentList from "../src/components/ContentList";
import { AppBarUI } from "../src/components/AppBar";
import { styles } from "../src/styles/pageStyle";

const programDiv = (getScreen().appWidth <= XSMALL) ? "100%" : `${XSMALL}px`;
const pageStyles = (theme) => ({
    contentBox: {
        width: `${programDiv}`,
    },
    root: styles(theme).root,
});

function onClickItem(router: RouterProps, { season, ep }) {
    router.push({
        pathname: "/play",
        query: { season, ep },
    });
}

function Chapters(props: { router: RouterProps, classes }) {
    const { classes } = props;

    console.log("Chapters page", getScreen());

    return (
        <div>
            <AppBarUI />
            <div className={classes.root}>
                <Flexbox flexDirection="row" justifyContent="center" >
                    <div id="Chapters" className={classes.contentBox}>
                        <ContentList
                            router={props.router}
                            onClickContent={(season: string, ep: string) =>
                                onClickItem(props.router, { season, ep })}
                        />
                    </div>
                </Flexbox >
            </div>
        </div>
    );
}

export default withMaterial(withStyles(pageStyles, { withTheme: true })(withRouter(Chapters)));
