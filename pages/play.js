import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../lib/withRoot';
import { ComposeApollo } from "../lib/withData";
import PlayContent from "../src/containers/PlayContent";
import { HeaderComponent } from "../src/components/HeaderComp";
import { AppBarUI } from "../src/components/AppBar";
const styles = theme => ({
    root: {},
});
function Index(props) {
    const { classes } = props;
    return (React.createElement(HeaderComponent, null,
        React.createElement(AppBarUI, null),
        React.createElement(Flexbox, { flexDirection: "row", justifyContent: "center", height: "100%" },
            React.createElement(PlayContent, Object.assign({}, props)))));
}
const PlayerPage = withRoot(withStyles(styles)(Index));
export default ComposeApollo(PlayerPage);
