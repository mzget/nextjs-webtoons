import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../lib/withRoot';
import { ComposeApollo } from "../lib/withData";
import { withRouter } from "next/router";
import { getScreen } from "../src/utils/responsiveHelper";
import ContentList from "../src/components/ContentList";
import { HeaderComponent } from "../src/components/HeaderComp";
import { AppBarUI } from "../src/components/AppBar";
const styles = theme => ({
    root: {},
});
function onClickItem(router, data) {
    router.push({
        pathname: "/play",
        query: { ep: `${data}` },
    });
}
function Chapters(props) {
    const { classes } = props;
    console.log("Chapters page", props, getScreen());
    console.log("browser", process.browser, process.env.NODE_ENV);
    return (React.createElement(HeaderComponent, null,
        React.createElement(AppBarUI, null),
        React.createElement(Flexbox, { flexDirection: "row", justifyContent: "center", height: "100%" },
            React.createElement(Flexbox, null),
            React.createElement("div", { id: "Chapters" },
                React.createElement(ContentList, Object.assign({}, props, { onClickContent: (data) => onClickItem(props.router, data) }))),
            React.createElement(Flexbox, null))));
}
const ChaptersPage = withRoot(withStyles(styles)(Chapters));
export default ComposeApollo(withRouter(ChaptersPage));
