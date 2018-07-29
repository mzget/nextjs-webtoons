"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const simple_flexbox_1 = require("simple-flexbox");
const styles_1 = require("@material-ui/core/styles");
const withMaterial_1 = require("../src/lib/withMaterial");
const pageStyle_1 = require("../src/styles/pageStyle");
const AppBar_1 = require("../src/components/AppBar");
const AddContent_1 = require("../src/components/AddContent");
class AddContent extends React.Component {
    render() {
        const { classes } = this.props;
        return (<div>
                <AppBar_1.AppBarUI />
                <div className={classes.root}>
                    <simple_flexbox_1.Row justifyContent="center">
                        <AddContent_1.AddContentComp />
                    </simple_flexbox_1.Row>
                </div>
            </div>);
    }
}
exports.default = withMaterial_1.default(styles_1.withStyles(pageStyle_1.styles, { withTheme: true })(AddContent));
