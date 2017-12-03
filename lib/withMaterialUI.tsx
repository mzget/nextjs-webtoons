import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import { deepOrange500 } from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import injectTapEventPlugin from "react-tap-event-plugin";
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from "material-ui/Toolbar";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";
import FontIcon from "material-ui/FontIcon";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
// if (!process.tapEventInjected) {
//     injectTapEventPlugin();
//     process.tapEventInjected = true;
// }

const styles = {
    container: {
        textAlign: "center",
        paddingTop: 200,
    },
};

const muiTheme = {
    palette: {
        accent1Color: deepOrange500,
    },
};

interface IMaterialUICompState {
    open: boolean;
    value: number;
}

const WithMaterialUI = (ReactComponent) => {
    return class Index extends React.Component<any, IMaterialUICompState> {
        static getInitialProps({ req }) {
            // Ensures material-ui renders the correct css prefixes server-side
            let userAgent;
            if (process.browser) {
                userAgent = navigator.userAgent;
            } else {
                userAgent = req.headers["user-agent"];
            }

            return { userAgent };
        }

        constructor(props, context) {
            super(props, context);

            this.state = {
                open: false,
                value: 0,
            };
        }

        handleRequestClose = () => {
            this.setState({
                open: false,
            });
        }

        handleTouchTap = () => {
            this.setState({
                open: true,
            });
        }

        handleDropDownChange() {
            this.setState({});
        }

        render() {
            const { userAgent } = this.props;

            const standardActions = (
                [<FlatButton
                    label="Ok"
                    primary={Boolean(true)}
                    onClick={this.handleRequestClose}
                />]
            );

            return (
                <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiTheme })}>
                    <div>
                        <Toolbar>
                            <ToolbarGroup firstChild={true}>
                                <DropDownMenu value={this.state.value} onChange={this.handleDropDownChange}>
                                    <MenuItem value={1} primaryText="All Broadcasts" />
                                    <MenuItem value={2} primaryText="All Voice" />
                                    <MenuItem value={3} primaryText="All Text" />
                                    <MenuItem value={4} primaryText="Complete Voice" />
                                    <MenuItem value={5} primaryText="Complete Text" />
                                    <MenuItem value={6} primaryText="Active Voice" />
                                    <MenuItem value={7} primaryText="Active Text" />
                                </DropDownMenu>
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <ToolbarTitle text="Options" />
                                <FontIcon className="muidocs-icon-custom-sort" />
                                <ToolbarSeparator />
                                <RaisedButton label="Create Broadcast" primary={true} />
                                <IconMenu
                                    iconButtonElement={
                                        <IconButton touch={true}>
                                            <NavigationExpandMoreIcon />
                                        </IconButton>
                                    }
                                >
                                    <MenuItem primaryText="Download" />
                                    <MenuItem primaryText="More Info" />
                                </IconMenu>
                            </ToolbarGroup>
                        </Toolbar>
                        <ReactComponent {...this.props} />
                    </div>
                </MuiThemeProvider>
            );
        }
    };
};

export default WithMaterialUI;
