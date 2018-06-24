import * as React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withRoot from '../lib/withRoot';
import { HeaderComponent } from "../src/components/HeaderComp";
import { AppBarUI } from "../src/components/AppBar";
const styles = theme => ({
    text: {
        padding: 16,
    },
});
export const About = (props) => {
    const { classes } = props;
    console.log("About page");
    return (<HeaderComponent>
            <AppBarUI />
            <div className={classes.text}>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    {`วันพีช One Piece การ์ตูนวันพีช ดูวันพีช รวมวันพีชทุกตอน`}
                </Typography>
            </div>
        </HeaderComponent>);
};
export default withRoot(withStyles(styles, { withTheme: true })(About));
