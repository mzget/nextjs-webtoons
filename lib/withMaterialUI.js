"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const colors_1 = require("material-ui/styles/colors");
const FlatButton_1 = require("material-ui/FlatButton");
const getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const Toolbar_1 = require("material-ui/Toolbar");
// This is the Link API
const link_1 = require("next/link");
// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
// if (!process.tapEventInjected) {
//     injectTapEventPlugin();
//     process.tapEventInjected = true;
// }
const muiTheme = {
    fontFamily: "Roboto, sans-serif",
    palette: {},
    toolbar: {
        color: colors_1.white,
        hoverColor: colors_1.white,
        backgroundColor: colors_1.indigo500,
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
            const standardActions = ([React.createElement(FlatButton_1.default, { label: "Ok", primary: Boolean(true), onClick: this.handleRequestClose })]);
            return (React.createElement(MuiThemeProvider_1.default, { muiTheme: getMuiTheme_1.default(Object.assign({}, muiTheme, { userAgent })) },
                React.createElement("div", { style: { backgroundColor: colors_1.grey50, height: "100vh", margin: -8, overflowY: "hidden" } },
                    React.createElement(Toolbar_1.Toolbar, null,
                        React.createElement(Toolbar_1.ToolbarGroup, { firstChild: true },
                            React.createElement(link_1.default, { href: "/" },
                                React.createElement(FlatButton_1.default, { label: "Home" })),
                            React.createElement(Toolbar_1.ToolbarSeparator, null)),
                        React.createElement(Toolbar_1.ToolbarGroup, null,
                            React.createElement(link_1.default, { href: "/about" },
                                React.createElement(FlatButton_1.default, { label: "About" })))),
                    React.createElement("div", { style: { height: "calc(100vh - 64px)", overflowY: "auto" } },
                        React.createElement(ReactComponent, Object.assign({}, this.props))))));
        }
    };
};
exports.default = WithMaterialUI;
