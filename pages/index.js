"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const flexbox_react_1 = require("flexbox-react");
const styles_1 = require("@material-ui/core/styles");
const withData_1 = require("../src/lib/withData");
const withRoot_1 = require("../src/lib/withRoot");
const responsiveHelper_1 = require("../src/utils/responsiveHelper");
const Programs_1 = require("../src/containers/Programs");
const HeaderComp_1 = require("../src/components/HeaderComp");
const AppBar_1 = require("../src/components/AppBar");
const styles = theme => {
    return ({
        root: {
            flex: 1
        },
    });
};
const Index = (props) => {
    const { classes } = props;
    console.log("Home page", props, responsiveHelper_1.getScreen());
    return (<HeaderComp_1.HeaderComponent>
            <AppBar_1.AppBarUI />
            <flexbox_react_1.default flexDirection="row" justifyContent="center" height={"100%"}>
                <Programs_1.default />
            </flexbox_react_1.default>
        </HeaderComp_1.HeaderComponent>);
};
const Page = withData_1.default(Index);
exports.default = withRoot_1.default(styles_1.withStyles(styles, { withTheme: true })(Page));
