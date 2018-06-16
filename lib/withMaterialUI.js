import * as React from "react";
import { indigo500, white, grey50 } from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarSeparator } from "material-ui/Toolbar";
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
};
const WithMaterialUI = (ReactComponent) => {
    return class Index extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.handleRequestClose = () => {
                this.setState({
                    open: false,
                });
            };
            this.handleTouchTap = () => {
                this.setState({
                    open: true,
                });
            };
            this.state = {
                open: false,
                value: 0,
            };
        }
        static getInitialProps({ req }) {
            // Ensures material-ui renders the correct css prefixes server-side
            let userAgent;
            if (process.browser) {
                userAgent = navigator.userAgent;
            }
            else {
                userAgent = req.headers["user-agent"];
            }
            return { userAgent };
        }
        handleDropDownChange() {
            this.setState({});
        }
        render() {
            const { userAgent } = this.props;
            return (React.createElement(MuiThemeProvider, { muiTheme: getMuiTheme(Object.assign({}, muiTheme, { userAgent })) },
                React.createElement("div", { style: { backgroundColor: grey50, height: "calc(100vh -8px)", margin: -8, overflow: "hidden" } },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarGroup, { firstChild: true },
                            React.createElement(Link, { href: "/" },
                                React.createElement(FlatButton, { label: "Home" })),
                            React.createElement(ToolbarSeparator, null)),
                        React.createElement(ToolbarGroup, null,
                            React.createElement(Link, { href: "/about" },
                                React.createElement(FlatButton, { label: "About" })))),
                    React.createElement("div", { id: "content", style: { height: "calc(100vh - 64px)", overflowY: "auto" } },
                        React.createElement(ReactComponent, Object.assign({}, this.props))))));
        }
    };
};
export default WithMaterialUI;
