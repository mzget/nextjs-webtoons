"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const flexbox_react_1 = require("flexbox-react");
const styles_1 = require("@material-ui/core/styles");
const withRoot_1 = require("../src/lib/withRoot");
const withData_1 = require("../src/lib/withData");
const PlayContent_1 = require("../src/containers/PlayContent");
const AppBar_1 = require("../src/components/AppBar");
const pageStyle_1 = require("../src/styles/pageStyle");
function Index(props) {
    const { classes } = props;
    return (<React.Fragment>
            <AppBar_1.AppBarUI />
            <div className={classes.root}>
                <flexbox_react_1.default flexDirection="row" justifyContent="center">
                    <PlayContent_1.default {...props}/>
                </flexbox_react_1.default>
            </div>
        </React.Fragment>);
}
const PlayerPage = withRoot_1.default(styles_1.withStyles(pageStyle_1.styles, { withTheme: true })(Index));
exports.default = withData_1.default(PlayerPage);
