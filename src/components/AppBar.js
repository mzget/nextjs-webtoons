import * as React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// This is the Link API
import Link from "next/link";
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
    return (React.createElement("div", { className: classes.root },
        React.createElement(AppBar, { position: "static" },
            React.createElement(Toolbar, null,
                React.createElement(IconButton, { className: classes.menuButton, color: "inherit", "aria-label": "Menu" },
                    React.createElement(MenuIcon, null)),
                React.createElement(Link, { href: "/" },
                    React.createElement(Typography, { variant: "title", color: "inherit", className: classes.flex }, "Home")),
                React.createElement(Link, { href: "/about" },
                    React.createElement(Button, { color: "inherit" }, "About"))))));
}
// ButtonAppBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
export const AppBarUI = withStyles(styles)(ButtonAppBar);
