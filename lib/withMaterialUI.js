"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RaisedButton_1 = require("material-ui/RaisedButton");
const colors_1 = require("material-ui/styles/colors");
const FlatButton_1 = require("material-ui/FlatButton");
const getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
// import injectTapEventPlugin from "react-tap-event-plugin";
const Toolbar_1 = require("material-ui/Toolbar");
const MenuItem_1 = require("material-ui/MenuItem");
const DropDownMenu_1 = require("material-ui/DropDownMenu");
const FontIcon_1 = require("material-ui/FontIcon");
const IconMenu_1 = require("material-ui/IconMenu");
const IconButton_1 = require("material-ui/IconButton");
const expand_more_1 = require("material-ui/svg-icons/navigation/expand-more");
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
        accent1Color: colors_1.deepOrange500,
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
            return (React.createElement(MuiThemeProvider_1.default, { muiTheme: getMuiTheme_1.default(Object.assign({ userAgent }, muiTheme)) },
                React.createElement("div", null,
                    React.createElement(Toolbar_1.Toolbar, null,
                        React.createElement(Toolbar_1.ToolbarGroup, { firstChild: true },
                            React.createElement(DropDownMenu_1.default, { value: this.state.value, onChange: this.handleDropDownChange },
                                React.createElement(MenuItem_1.default, { value: 1, primaryText: "All Broadcasts" }),
                                React.createElement(MenuItem_1.default, { value: 2, primaryText: "All Voice" }),
                                React.createElement(MenuItem_1.default, { value: 3, primaryText: "All Text" }),
                                React.createElement(MenuItem_1.default, { value: 4, primaryText: "Complete Voice" }),
                                React.createElement(MenuItem_1.default, { value: 5, primaryText: "Complete Text" }),
                                React.createElement(MenuItem_1.default, { value: 6, primaryText: "Active Voice" }),
                                React.createElement(MenuItem_1.default, { value: 7, primaryText: "Active Text" }))),
                        React.createElement(Toolbar_1.ToolbarGroup, null,
                            React.createElement(Toolbar_1.ToolbarTitle, { text: "Options" }),
                            React.createElement(FontIcon_1.default, { className: "muidocs-icon-custom-sort" }),
                            React.createElement(Toolbar_1.ToolbarSeparator, null),
                            React.createElement(RaisedButton_1.default, { label: "Create Broadcast", primary: true }),
                            React.createElement(IconMenu_1.default, { iconButtonElement: React.createElement(IconButton_1.default, { touch: true },
                                    React.createElement(expand_more_1.default, null)) },
                                React.createElement(MenuItem_1.default, { primaryText: "Download" }),
                                React.createElement(MenuItem_1.default, { primaryText: "More Info" })))),
                    React.createElement(ReactComponent, Object.assign({}, this.props)))));
        }
    };
};
exports.default = WithMaterialUI;
