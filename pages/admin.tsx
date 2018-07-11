import * as React from 'react'
import { withStyles } from '@material-ui/core/styles';

import withMaterial from '../src/lib/withMaterial';
import { styles } from "../src/styles/pageStyle";
import { AppBarUI } from "../src/components/AppBar";

class Admin extends React.Component<any, any> {
    render() {
        return (
            <div>
                <AppBarUI />
            </div>
        )
    }
}

export default withMaterial(withStyles(styles, { withTheme: true })(Admin));