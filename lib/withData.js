var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import Head from "next/head";
import initApollo from "./initApollo";
// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
    return Component.displayName || Component.name || "Unknown";
}
export function ComposeApollo(ComposedComponent) {
    var _a;
    return _a = class WithData extends React.Component {
            constructor(props) {
                super(props);
                this.apollo = initApollo(this.props.serverState.apollo.data);
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
                        const apollo = initApollo();
                        // Provide the `url` prop data in case a GraphQL query uses it
                        const url = { query: ctx.query, pathname: ctx.pathname };
                        try {
                            // Run all GraphQL queries
                            yield getDataFromTree(<ApolloProvider client={apollo}>
              <ComposedComponent url={url} {...composedInitialProps}/>
            </ApolloProvider>);
                        }
                        catch (error) {
                            // Prevent Apollo Client GraphQL errors from crashing SSR.
                            // Handle them in components via the data.error prop:
                            // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                        }
                        // getDataFromTree does not call componentWillUnmount
                        // head side effect therefore need to be cleared manually
                        Head.rewind();
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
                return (<ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props}/>
        </ApolloProvider>);
            }
        },
        _a.displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`,
        _a;
}
;
