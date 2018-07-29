"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const flexbox_react_1 = require("flexbox-react");
const styles_1 = require("@material-ui/core/styles");
const withData_1 = require("../src/lib/withData");
const withMaterial_1 = require("../src/lib/withMaterial");
const responsiveHelper_1 = require("../src/utils/responsiveHelper");
const Programs_1 = require("../src/containers/Programs");
const AppBar_1 = require("../src/components/AppBar");
const pageStyle_1 = require("../src/styles/pageStyle");
// calc(100vh-64px)
const Index = (props) => {
    const { classes } = props;
    console.log("Home: ", props, responsiveHelper_1.getScreen());
    return (<React.Fragment>
            <AppBar_1.AppBarUI />
            <div className={classes.root}>
                <flexbox_react_1.default flexDirection="row" justifyContent="center">
                    <Programs_1.default />
                </flexbox_react_1.default>
            </div>
        </React.Fragment>);
};
const Page = withData_1.default(Index);
exports.default = withMaterial_1.default(styles_1.withStyles(pageStyle_1.styles, { withTheme: true })(Page));
