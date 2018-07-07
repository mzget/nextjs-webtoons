"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = require("@material-ui/core/Typography");
const withRoot_1 = require("../src/lib/withRoot");
const AppBar_1 = require("../src/components/AppBar");
const pageStyle_1 = require("../src/styles/pageStyle");
exports.About = (props) => {
    const { classes } = props;
    console.log("About page");
    return (<React.Fragment>
            <AppBar_1.AppBarUI />
            <div className={classes.root}>
                <Typography_1.default variant="title" color="inherit">
                    {`วันพีช One Piece การ์ตูนวันพีช ดูวันพีช รวมวันพีชทุกตอน`}
                </Typography_1.default>
            </div>
        </React.Fragment>);
};
exports.default = withRoot_1.default(styles_1.withStyles(pageStyle_1.styles, { withTheme: true })(exports.About));
