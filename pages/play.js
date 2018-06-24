"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const flexbox_react_1 = require("flexbox-react");
const styles_1 = require("@material-ui/core/styles");
const withRoot_1 = require("../src/lib/withRoot");
const withData_1 = require("../src/lib/withData");
const PlayContent_1 = require("../src/containers/PlayContent");
const HeaderComp_1 = require("../src/components/HeaderComp");
const AppBar_1 = require("../src/components/AppBar");
const styles = theme => ({
    root: {},
});
function Index(props) {
    const { classes } = props;
    return (<HeaderComp_1.HeaderComponent>
            <AppBar_1.AppBarUI />
            <flexbox_react_1.default flexDirection="row" justifyContent="center" height={"100%"}>
                <PlayContent_1.default {...props}/>
            </flexbox_react_1.default>
        </HeaderComp_1.HeaderComponent>);
}
const PlayerPage = withRoot_1.default(styles_1.withStyles(styles)(Index));
exports.default = withData_1.default(PlayerPage);
