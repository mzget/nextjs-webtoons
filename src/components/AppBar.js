"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import PropTypes from 'prop-types';
const styles_1 = require("@material-ui/core/styles");
const AppBar_1 = require("@material-ui/core/AppBar");
const Toolbar_1 = require("@material-ui/core/Toolbar");
const Typography_1 = require("@material-ui/core/Typography");
const Button_1 = require("@material-ui/core/Button");
const IconButton_1 = require("@material-ui/core/IconButton");
const Menu_1 = require("@material-ui/icons/Menu");
// This is the Link API
const link_1 = require("next/link");
const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};
function ButtonAppBar(props) {
    const { classes } = props;
    return (<div className={classes.root}>
            <AppBar_1.default position="fixed">
                <Toolbar_1.default>
                    <IconButton_1.default className={classes.menuButton} color="inherit" aria-label="Menu">
                        <Menu_1.default />
                    </IconButton_1.default>
                    <link_1.default href="/">
                        <Typography_1.default variant="title" color="inherit" className={classes.flex}>
                            Home
                        </Typography_1.default>
                    </link_1.default>
                    <link_1.default href="/about">
                        <Button_1.default color="inherit">About</Button_1.default>
                    </link_1.default>
                </Toolbar_1.default>
            </AppBar_1.default>
        </div>);
}
// ButtonAppBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
exports.AppBarUI = styles_1.withStyles(styles)(ButtonAppBar);
