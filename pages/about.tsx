import * as  React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import withMaterial from "../src/lib/withMaterial";
import { AppBarUI } from "../src/components/AppBar";
import { styles } from "../src/styles/pageStyle";

export const About = (props: any) => {
    const { classes } = props;
    console.log("About page");

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
};

export default withMaterial(withStyles(styles, { withTheme: true })(About));
