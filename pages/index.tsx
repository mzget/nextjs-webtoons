import * as React from "react";
import Flexbox from "flexbox-react";

import { ComposeApollo } from "../lib/withData";
import withRoot from '../lib/withRoot';
import { withStyles } from '@material-ui/core/styles';

import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";
import { HeaderComponent } from "../src/components/HeaderComp";

const styles = theme => ({
    root: {
    },
});

const Index = (props: any) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <HeaderComponent>
                <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
                    <Flexbox />
                    <div id="home">
                        {
                            console.log("Home page", props, getScreen())
                        }
                        <Programs />
                    </div>
                    <Flexbox />
                </Flexbox >
            </HeaderComponent>
        </div>
    );
};

const HomePage = withRoot(withStyles(styles)(Index));
export default ComposeApollo(HomePage);
