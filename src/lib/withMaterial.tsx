import * as React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import getPageContext, { IPageContext } from "./getPageContext";

function withMaterial(Component) {
    class WithRoot extends React.Component<any, any> {

        static getInitialProps = (ctx) => {
            if (Component.getInitialProps) {
                return Component.getInitialProps(ctx);
            }

            return {};
        }

        pageContext = null as IPageContext | null;

        constructor(props) {
            super(props);

            this.pageContext = this.props.pageContext || getPageContext();
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
                return (
                    <MuiThemeProvider
                        theme={this.pageContext.theme}
                        sheetsManager={this.pageContext.sheetsManager}
                    >
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Component {...this.props} />
                    </MuiThemeProvider>
                );
            } else {
                return null;
            }
        }
    }

    return WithRoot;
}

export default withMaterial;
