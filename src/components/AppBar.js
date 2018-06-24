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
    return (<div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Link href="/">
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Home
                        </Typography>
                    </Link>
                    <Link href="/about">
                        <Button color="inherit">About</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>);
}
// ButtonAppBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
export const AppBarUI = withStyles(styles)(ButtonAppBar);
