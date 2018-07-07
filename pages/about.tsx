import * as  React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import withRoot from '../src/lib/withRoot';
import { HeaderComponent } from "../src/components/HeaderComp";
import { AppBarUI } from "../src/components/AppBar"
import { styles } from "../src/styles/pageStyle";

export const About = (props: any) => {
    const { classes } = props;
    console.log("About page")

    return (
        <React.Fragment>
            <AppBarUI />
            <div className={classes.root}>
                <Typography variant="title" color="inherit">
                    {`วันพีช One Piece การ์ตูนวันพีช ดูวันพีช รวมวันพีชทุกตอน`}
                </Typography>
            </div>
        </React.Fragment>
    );
}

export default withRoot(withStyles(styles, { withTheme: true })(About));
