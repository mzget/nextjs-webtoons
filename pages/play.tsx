import * as React from "react";
import { withRouter } from "next/router";
import { ComposeApollo } from "../lib/withData";

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../lib/withRoot';

import PlayContent from "../src/containers/PlayContent";
import { HeaderComponent } from "../src/components/HeaderComp";

const styles = theme => ({
    root: {
    },
});

function Index(props: any) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <HeaderComponent>
                <PlayContent {...props} />
            </HeaderComponent>
        </div>
    );
}

const PlayerPage = withRoot(withStyles(styles)(Index));
export default ComposeApollo(withRouter(PlayerPage));
