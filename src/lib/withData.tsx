import * as React from "react";
import Head from "next/head";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import ApolloClient from "apollo-client/ApolloClient";
import { NormalizedCacheObject } from "apollo-cache-inmemory";

import initApollo from "./initApollo";

function withData(ComposedComponent) {
  class WithData extends React.Component<any, any> {

    static displayName = `WithData(${ComposedComponent.name})`;

    static getInitialProps = (ctx: any) => {
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
      if (!(process as any).browser) {
        const apollo = initApollo();
        // Provide the `url` prop data in case a GraphQL query uses it
        const url = { query: ctx.query, pathname: ctx.pathname };
        try {
          // Run all GraphQL queries
          getDataFromTree(
            <ApolloProvider client={apollo} >
              <ComposedComponent url={url} {...composedInitialProps} />
            </ApolloProvider>,
          );
        } catch (error) {
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

      return {
        serverState,
        ...composedInitialProps,
      };
    }

    apollo: ApolloClient<NormalizedCacheObject>;

    constructor(props) {
      super(props);

      this.apollo = initApollo(this.props.serverState.apollo.data);
    }

    render() {
      return (
        <ApolloProvider client={this.apollo} >
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  }

  return WithData;
}

export default withData;
