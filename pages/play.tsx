import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from "@material-ui/core/styles";

import withMaterial from "../src/lib/withMaterial";

import PlayContent from "../src/components/PlayContent";
import { AppBarUI } from "../src/components/AppBar";
import { styles } from "../src/styles/pageStyle";

function Index(props: any) {
    const { classes } = props;

    return (
        <>
            <AppBarUI />
            <div className={classes.root}>
                <Flexbox flexDirection="row" justifyContent="center" >
                    <PlayContent {...props} />
                </Flexbox>
            </div>
        </>
    );
}

export default withMaterial(withStyles(styles, { withTheme: true })(Index));
