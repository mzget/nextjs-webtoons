import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from "@material-ui/core/styles";

import withMaterial from "../src/lib/withMaterial";
import { styles } from "../src/styles/pageStyle";
import WithData from "../src/lib/withData";
import { EnhancedContextStore } from "../src/contextStore/storeContext";
import { AppBarUI } from "../src/components/AppBar";
import { AddContentComp } from "../src/components/AddContent";

class AddContent extends React.Component<any, any> {
    render() {
        const { classes } = this.props;

        console.log("Add content page: ", this.props);

        return (
            <EnhancedContextStore>
                <AppBarUI />
                <div className={classes.root}>
                    <Flexbox justifyContent="center" flexDirection="row" >
                        <AddContentComp />
                    </Flexbox>
                </div>
            </EnhancedContextStore>
        );
    }
}

export default withMaterial(withStyles(styles, { withTheme: true })(AddContent));
