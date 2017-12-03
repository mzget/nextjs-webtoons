"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const colors_1 = require("material-ui/styles/colors");
const FlatButton_1 = require("material-ui/FlatButton");
const getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
// import injectTapEventPlugin from "react-tap-event-plugin";
const darkBaseTheme_1 = require("material-ui/styles/baseThemes/darkBaseTheme");
const Toolbar_1 = require("material-ui/Toolbar");
const MenuItem_1 = require("material-ui/MenuItem");
const DropDownMenu_1 = require("material-ui/DropDownMenu");
// This is the Link API
const link_1 = require("next/link");
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
const muiTheme = Object.assign({ palette: {
        textColor: colors_1.white,
    }, toolbar: {
        color: colors_1.white,
        hoverColor: colors_1.white,
        backgroundColor: colors_1.indigo500,
    } }, darkBaseTheme_1.default);
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
            const standardActions = ([React.createElement(FlatButton_1.default, { label: "Ok", primary: Boolean(true), onClick: this.handleRequestClose })]);
            return (React.createElement(MuiThemeProvider_1.default, { muiTheme: getMuiTheme_1.default(Object.assign({}, muiTheme, { userAgent })) },
                React.createElement("div", null,
                    React.createElement(Toolbar_1.Toolbar, null,
                        React.createElement(Toolbar_1.ToolbarGroup, { firstChild: true },
                            React.createElement(link_1.default, { href: "/" },
                                React.createElement(FlatButton_1.default, { label: "Home" })),
                            React.createElement(Toolbar_1.ToolbarSeparator, null),
                            React.createElement(DropDownMenu_1.default, { value: this.state.value, onChange: this.handleDropDownChange },
                                React.createElement(MenuItem_1.default, { value: 1, primaryText: "All Broadcasts" }),
                                React.createElement(MenuItem_1.default, { value: 2, primaryText: "All Voice" }),
                                React.createElement(MenuItem_1.default, { value: 3, primaryText: "All Text" }),
                                React.createElement(MenuItem_1.default, { value: 4, primaryText: "Complete Voice" }),
                                React.createElement(MenuItem_1.default, { value: 5, primaryText: "Complete Text" }),
                                React.createElement(MenuItem_1.default, { value: 6, primaryText: "Active Voice" }),
                                React.createElement(MenuItem_1.default, { value: 7, primaryText: "Active Text" }))),
                        React.createElement(Toolbar_1.ToolbarGroup, null,
                            React.createElement(link_1.default, { href: "/about" },
                                React.createElement(FlatButton_1.default, { label: "About" })))),
                    React.createElement(ReactComponent, Object.assign({}, this.props)))));
        }
    };
};
exports.default = WithMaterialUI;
