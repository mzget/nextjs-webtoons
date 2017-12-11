import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import { indigo900, indigo500, indigo50, darkBlack, darkWhite, white, grey50 } from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import injectTapEventPlugin from "react-tap-event-plugin";

import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from "material-ui/Toolbar";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";
import FontIcon from "material-ui/FontIcon";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import { MuiTheme } from "material-ui/styles";

// This is the Link API
import Link from "next/link";

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
// if (!process.tapEventInjected) {
//     injectTapEventPlugin();
//     process.tapEventInjected = true;
// }

const muiTheme = {
    fontFamily: "Roboto, sans-serif",
    palette: {
        // textColor: darkWhite,
    },
    toolbar: {
        color: white,
        hoverColor: white,
        backgroundColor: indigo500,
    },
} as MuiTheme;

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

            return (
                <MuiThemeProvider muiTheme={getMuiTheme({ ...muiTheme, userAgent })}>
                    <div style={{ backgroundColor: grey50, height: "calc(100vh -8px)", margin: -8, overflow: "hidden" }} >
                        <Toolbar>
                            <ToolbarGroup firstChild={true}>
                                <Link href="/">
                                    <FlatButton label="Home" />
                                </Link>
                                <ToolbarSeparator />
                                {/* <DropDownMenu value={this.state.value} onChange={this.handleDropDownChange}>
                                    <MenuItem value={1} primaryText="All Broadcasts" />
                                    <MenuItem value={2} primaryText="All Voice" />
                                    <MenuItem value={3} primaryText="All Text" />
                                    <MenuItem value={4} primaryText="Complete Voice" />
                                    <MenuItem value={5} primaryText="Complete Text" />
                                    <MenuItem value={6} primaryText="Active Voice" />
                                    <MenuItem value={7} primaryText="Active Text" />
                                </DropDownMenu> */}
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <Link href="/about">
                                    <FlatButton label="About" />
                                </Link>
                            </ToolbarGroup>
                        </Toolbar>
                        <div id="content" style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}>
                            <ReactComponent {...this.props} />
                        </div>
                    </div>
                </MuiThemeProvider>
            );
        }
    };
};

export default WithMaterialUI;
