"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = require("@material-ui/core/Typography");
const withRoot_1 = require("../src/lib/withRoot");
const HeaderComp_1 = require("../src/components/HeaderComp");
const AppBar_1 = require("../src/components/AppBar");
const styles = theme => ({
    text: {
        padding: 16,
    },
});
exports.About = (props) => {
    const { classes } = props;
    console.log("About page");
    return (<HeaderComp_1.HeaderComponent>
            <AppBar_1.AppBarUI />
            <div className={classes.text}>
                <Typography_1.default variant="title" color="inherit" className={classes.flex}>
                    {`วันพีช One Piece การ์ตูนวันพีช ดูวันพีช รวมวันพีชทุกตอน`}
                </Typography_1.default>
            </div>
        </HeaderComp_1.HeaderComponent>);
};
exports.default = withRoot_1.default(styles_1.withStyles(styles, { withTheme: true })(exports.About));
