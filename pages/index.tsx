import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from '@material-ui/core/styles';

import withData from "../src/lib/withData";
import withRoot from '../src/lib/withRoot';
import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";
import { HeaderComponent } from "../src/components/HeaderComp";
import { AppBarUI } from "../src/components/AppBar";

const styles = theme => {
    return ({
        root: {
            flex: 1
        },
    })
};

const Index = (props: any) => {
    const { classes } = props;
    console.log("Home page", props, getScreen());

    return (
        <HeaderComponent>
            <AppBarUI />
            <Flexbox flexDirection="row" justifyContent="center" height={"100%"}>
                <Programs />
            </Flexbox>
        </HeaderComponent>
    );
};

const Page = withData(Index) as any;
export default withRoot(withStyles(styles, { withTheme: true })(Page));
