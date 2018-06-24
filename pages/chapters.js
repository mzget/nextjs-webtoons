"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const flexbox_react_1 = require("flexbox-react");
const styles_1 = require("@material-ui/core/styles");
const router_1 = require("next/router");
const withRoot_1 = require("../src/lib/withRoot");
const withData_1 = require("../src/lib/withData");
const responsiveHelper_1 = require("../src/utils/responsiveHelper");
const ContentList_1 = require("../src/components/ContentList");
const HeaderComp_1 = require("../src/components/HeaderComp");
const AppBar_1 = require("../src/components/AppBar");
const programDiv = (responsiveHelper_1.getScreen().appWidth <= responsiveHelper_1.XSMALL) ? "100%" : `${responsiveHelper_1.XSMALL}px`;
const styles = theme => ({
    root: {
        width: `${programDiv}`
    },
    list: {
        flex: 1,
    },
});
function onClickItem(router, data) {
    router.push({
        pathname: "/play",
        query: { ep: `${data}` },
    });
}
function Chapters(props) {
    const { classes } = props;
    console.log("Chapters page", props, responsiveHelper_1.getScreen());
    return (<HeaderComp_1.HeaderComponent>
            <AppBar_1.AppBarUI />
            <flexbox_react_1.default flexDirection="row" justifyContent="center" height={"100%"}>
                <div id="Chapters" className={classes.root}>
                    <div>
                        <ContentList_1.default {...props} onClickContent={(data) => onClickItem(props.router, data)}/>
                    </div>
                </div>
            </flexbox_react_1.default>
        </HeaderComp_1.HeaderComponent>);
}
const ChaptersPage = withRoot_1.default(styles_1.withStyles(styles, { withTheme: true })(router_1.withRouter(Chapters)));
exports.default = withData_1.default(ChaptersPage);
