"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const CssBaseline_1 = require("@material-ui/core/CssBaseline");
const getPageContext_1 = require("./getPageContext");
function withMaterial(Component) {
    class WithRoot extends React.Component {
        constructor(props) {
            super(props);
            this.pageContext = null;
            this.pageContext = this.props.pageContext || getPageContext_1.default();
        }
        componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector("#jss-server-side");
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }
        render() {
            // MuiThemeProvider makes the theme available down the React tree thanks to React context.
            if (this.pageContext) {
                return (<styles_1.MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
                        
                        <CssBaseline_1.default />
                        <Component {...this.props}/>
                    </styles_1.MuiThemeProvider>);
            }
            else {
                return null;
            }
        }
    }
    WithRoot.getInitialProps = (ctx) => {
        if (Component.getInitialProps) {
            return Component.getInitialProps(ctx);
        }
        return {};
    };
    return WithRoot;
}
exports.default = withMaterial;
