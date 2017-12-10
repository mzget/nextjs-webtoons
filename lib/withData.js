"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const head_1 = require("next/head");
const initApollo_1 = require("./initApollo");
// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
    return Component.displayName || Component.name || "Unknown";
}
exports.default = ComposedComponent => {
    return _a = class WithData extends React.Component {
            constructor(props) {
                super(props);
                this.apollo = initApollo_1.default(this.props.serverState.apollo.data);
            }
            static getInitialProps(ctx) {
                return __awaiter(this, void 0, void 0, function* () {
                    // Initial serverState with apollo (empty)
                    let serverState = {
                        apollo: {
                            data: {},
                        },
                    };
                    // Evaluate the composed component's getInitialProps()
                    let composedInitialProps = {};
                    if (ComposedComponent.getInitialProps) {
                        composedInitialProps = yield ComposedComponent.getInitialProps(ctx);
                    }
                    // Run all GraphQL queries in the component tree
                    // and extract the resulting data
                    if (!process.browser) {
                        const apollo = initApollo_1.default();
                        // Provide the `url` prop data in case a GraphQL query uses it
                        const url = { query: ctx.query, pathname: ctx.pathname };
                        try {
                            // Run all GraphQL queries
                            yield react_apollo_1.getDataFromTree(React.createElement(react_apollo_1.ApolloProvider, { client: apollo },
                                React.createElement(ComposedComponent, Object.assign({ url: url }, composedInitialProps))));
                        }
                        catch (error) {
                            // Prevent Apollo Client GraphQL errors from crashing SSR.
                            // Handle them in components via the data.error prop:
                            // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                        }
                        // getDataFromTree does not call componentWillUnmount
                        // head side effect therefore need to be cleared manually
                        head_1.default.rewind();
                        // Extract query data from the Apollo store
                        serverState = {
                            apollo: {
                                data: apollo.cache.extract(),
                            },
                        };
                    }
                    return Object.assign({ serverState }, composedInitialProps);
                });
            }
            render() {
                return (React.createElement(react_apollo_1.ApolloProvider, { client: this.apollo },
                    React.createElement(ComposedComponent, Object.assign({}, this.props))));
            }
        },
        _a.displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`,
        _a;
    var _a;
};
