import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from '@material-ui/core/styles';

import withData from "../src/lib/withData";
import withMaterial from '../src/lib/withMaterial';
import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";
import { AppBarUI } from "../src/components/AppBar";
import { styles } from "../src/styles/pageStyle";


// calc(100vh-64px)
const Index = (props: any) => {
    const { classes } = props;
    console.log("Home page", props, getScreen());

    return (
        <React.Fragment>
            <AppBarUI />
            <div className={classes.root}>
                <Flexbox flexDirection="row" justifyContent="center">
                    <Programs />
                </Flexbox>
            </div>
        </React.Fragment >
    );
};

const Page = withData(Index) as any;
export default withMaterial(withStyles(styles, { withTheme: true })(Page));
