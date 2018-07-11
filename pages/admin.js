"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const withMaterial_1 = require("../src/lib/withMaterial");
const pageStyle_1 = require("../src/styles/pageStyle");
const AppBar_1 = require("../src/components/AppBar");
class Admin extends React.Component {
    render() {
        return (<div>
                <AppBar_1.AppBarUI />
            </div>);
    }
}
exports.default = withMaterial_1.default(styles_1.withStyles(pageStyle_1.styles, { withTheme: true })(Admin));
