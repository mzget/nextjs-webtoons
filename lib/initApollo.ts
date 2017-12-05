import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import fetch from "node-fetch";

let apolloClient = null as ApolloClient<NormalizedCacheObject> | null;

// Polyfill fetch() on the server (used by apollo-client)
console.log("browser", process.browser);
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState: any) {
  const link = new HttpLink({
    uri: "http://chitchats.ga:4000/api/graphql",
    credentials: "same-origin",
    // fetch,
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: true, // !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link,
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
