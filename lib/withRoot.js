import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from './getPageContext';
function withRoot(Component) {
    class WithRoot extends React.Component {
        constructor(props) {
            super(props);
            this.pageContext = null;
            this.pageContext = this.props.pageContext || getPageContext();
        }
        componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector('#jss-server-side');
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }
        render() {
            // MuiThemeProvider makes the theme available down the React tree thanks to React context.
            return (React.createElement(MuiThemeProvider, { theme: this.pageContext.theme, sheetsManager: this.pageContext.sheetsManager },
                React.createElement(CssBaseline, null),
                React.createElement(Component, Object.assign({}, this.props))));
        }
    }
    WithRoot.getInitialProps = ctx => {
        if (Component.getInitialProps) {
            return Component.getInitialProps(ctx);
        }
        return {};
    };
    return WithRoot;
}
export default withRoot;
