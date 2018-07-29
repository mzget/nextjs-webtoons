import * as React from "react";
import App, { Container } from "next/app";
import { withApollo } from "../src/lib/apollo/with-apollo-client";
import { ApolloProvider } from "react-apollo";

class MyApp extends App<{ apolloClient }> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient} >
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
