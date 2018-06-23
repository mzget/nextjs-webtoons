import * as React from "react";
import Flexbox from "flexbox-react";
import { ComposeApollo } from "../lib/withData";
import withRoot from '../lib/withRoot';
import { withStyles } from '@material-ui/core/styles';
import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";
import { HeaderComponent } from "../src/components/HeaderComp";
const styles = theme => ({
    root: {},
});
const Index = (props) => {
    const { classes } = props;
    return (React.createElement("div", { className: classes.root },
        React.createElement(HeaderComponent, null,
            React.createElement(Flexbox, { flexDirection: "row", justifyContent: "center", height: "100%" },
                React.createElement(Flexbox, null),
                React.createElement("div", { id: "home" },
                    console.log("Home page", props, getScreen()),
                    React.createElement(Programs, null)),
                React.createElement(Flexbox, null)))));
};
const HomePage = withRoot(withStyles(styles)(Index));
export default ComposeApollo(HomePage);
