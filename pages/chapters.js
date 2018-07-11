"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const flexbox_react_1 = require("flexbox-react");
const styles_1 = require("@material-ui/core/styles");
const router_1 = require("next/router");
const withMaterial_1 = require("../src/lib/withMaterial");
const withData_1 = require("../src/lib/withData");
const responsiveHelper_1 = require("../src/utils/responsiveHelper");
const ContentList_1 = require("../src/components/ContentList");
const AppBar_1 = require("../src/components/AppBar");
const pageStyle_1 = require("../src/styles/pageStyle");
const programDiv = (responsiveHelper_1.getScreen().appWidth <= responsiveHelper_1.XSMALL) ? "100%" : `${responsiveHelper_1.XSMALL}px`;
const pageStyles = theme => ({
    contentBox: {
        width: `${programDiv}`
    },
    root: pageStyle_1.styles(theme).root
});
function onClickItem(router, { season, ep }) {
    router.push({
        pathname: "/play",
        query: { season, ep },
    });
}
function Chapters(props) {
    const { classes } = props;
    console.log("Chapters page", props, responsiveHelper_1.getScreen());
    return (<React.Fragment>
            <AppBar_1.AppBarUI />
            <div className={classes.root}>
                <flexbox_react_1.default flexDirection="row" justifyContent="center">
                    <div id="Chapters" className={classes.contentBox}>
                        <ContentList_1.default router={props.router} onClickContent={(season, ep) => onClickItem(props.router, { season, ep })}/>
                    </div>
                </flexbox_react_1.default>
            </div>
        </React.Fragment>);
}
const ChaptersPage = withMaterial_1.default(styles_1.withStyles(pageStyles, { withTheme: true })(router_1.withRouter(Chapters)));
exports.default = withData_1.default(ChaptersPage);
