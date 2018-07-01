import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../src/lib/withRoot';
import withData from "../src/lib/withData";

import PlayContent from "../src/containers/PlayContent";
import { AppBarUI } from "../src/components/AppBar";
import { styles } from "../src/styles/pageStyle";

function Index(props: any) {
    const { classes } = props;

    return (
        <React.Fragment>
            <AppBarUI />
            <div className={classes.root}>
                <Flexbox flexDirection="row" justifyContent="center" >
                    <PlayContent {...props} />
                </Flexbox>
            </div>
        </React.Fragment>
    );
}

const PlayerPage = withRoot(withStyles(styles, { withTheme: true })(Index));
export default withData(PlayerPage);
