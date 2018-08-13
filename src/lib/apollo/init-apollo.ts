import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import { HttpLink } from "apollo-boost";
import { InMemoryCache } from "apollo-boost";
import * as fetch from "isomorphic-unfetch";

let apolloClient = null as ApolloClient<NormalizedCacheObject> | null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const endPoint = (process.env.NODE_ENV === "production") ?
  "https://awesome-barcode.appspot.com/api/graphql" : "http://localhost:8080/api/graphql";
// http://localhost:8080/api/graphql
// https://awesome-barcode.appspot.com/api/graphql
function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: endPoint, // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState?: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
