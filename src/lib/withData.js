"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
const react_apollo_1 = require("react-apollo");
const initApollo_1 = require("./initApollo");
function withData(ComposedComponent) {
    class WithData extends React.Component {
        constructor(props) {
            super(props);
            this.apollo = initApollo_1.default(this.props.serverState.apollo.data);
        }
        render() {
            return (<react_apollo_1.ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props}/>
        </react_apollo_1.ApolloProvider>);
        }
    }
    ;
    WithData.displayName = `WithData(${ComposedComponent.name})`;
    WithData.getInitialProps = (ctx) => {
        // Initial serverState with apollo (empty)
        let serverState = {
            apollo: {
                data: {},
            },
        };
        // Evaluate the composed component's getInitialProps()
        let composedInitialProps = {};
        if (ComposedComponent.getInitialProps) {
            composedInitialProps = ComposedComponent.getInitialProps(ctx);
        }
        // Run all GraphQL queries in the component tree
        // and extract the resulting data
        if (!process.browser) {
            const apollo = initApollo_1.default();
            // Provide the `url` prop data in case a GraphQL query uses it
            const url = { query: ctx.query, pathname: ctx.pathname };
            try {
                // Run all GraphQL queries
                react_apollo_1.getDataFromTree(<react_apollo_1.ApolloProvider client={apollo}>
            <ComposedComponent url={url} {...composedInitialProps}/>
          </react_apollo_1.ApolloProvider>);
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
    };
    return WithData;
}
;
exports.default = withData;
