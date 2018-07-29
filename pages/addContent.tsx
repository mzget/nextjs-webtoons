import * as React from "react";
import { Row } from "simple-flexbox";
import { withStyles } from "@material-ui/core/styles";

import withMaterial from "../src/lib/withMaterial";
import { styles } from "../src/styles/pageStyle";

import { AppBarUI } from "../src/components/AppBar";
import { AddContentComp } from "../src/components/AddContent";

class AddContent extends React.Component<any, any> {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBarUI />
                <div className={classes.root}>
                    <Row justifyContent="center" >
                        <AddContentComp />
                    </Row>
                </div>
            </div>
        );
    }
}

export default withMaterial(withStyles(styles, { withTheme: true })(AddContent));
