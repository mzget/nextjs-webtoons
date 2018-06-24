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
    console.log("browser", process.browser, process.env.NODE_ENV);
    return (React.createElement(HeaderComponent, null,
        React.createElement(AppBarUI, null),
        React.createElement("div", { className: classes.text },
            React.createElement(Typography, { variant: "title", color: "inherit", className: classes.flex }, `วันพีช One Piece การ์ตูนวันพีช ดูวันพีช รวมวันพีชทุกตอน`))));
};
export default withRoot(withStyles(styles)(About));
