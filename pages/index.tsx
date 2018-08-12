import * as React from "react";
import Flexbox from "flexbox-react";
import { withStyles } from "@material-ui/core/styles";

import withMaterial from "../src/lib/withMaterial";
import { getScreen } from "../src/utils/responsiveHelper";
import Programs from "../src/containers/Programs";
import { AppBarUI } from "../src/components/AppBar";
import { styles } from "../src/styles/pageStyle";

class Home extends React.Component<any> {
    static displayName = "Home";

    constructor(props) {
        super(props);

        console.log("Screen: ", getScreen());

        console.log("Home: ", this.props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBarUI />
                <div className={classes.root}>
                    <Flexbox flexDirection="row" justifyContent="center">
                        <Programs />
                    </Flexbox>
                </div>
            </div>
        );
    }
}

export default withMaterial(withStyles(styles, { withTheme: true })(Home));
