import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from '@material-ui/core/styles';

import { ComposeApollo } from "../lib/withData";
import withRoot from '../lib/withRoot';
import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";
import { HeaderComponent } from "../src/components/HeaderComp";
import { AppBarUI } from "../src/components/AppBar"

const styles = theme => ({
    root: {
        flex: 1
    }
});

const Index = (props: any) => {
    const { classes } = props;
    console.log("Home page", props, getScreen())
    console.log("browser", (process as any).browser, process.env.NODE_ENV);

    return (
        <HeaderComponent>
            <AppBarUI />
            <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
                <div id="Home">
                    <Programs />
                </div>
            </Flexbox>
        </HeaderComponent>
    );
};

const HomePage = withRoot(withStyles(styles)(Index));
export default ComposeApollo(HomePage);
