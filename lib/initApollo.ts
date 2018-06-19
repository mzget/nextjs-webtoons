import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import fetch from "node-fetch";

let apolloClient = null as ApolloClient<NormalizedCacheObject> | null;

// if (process.env.NODE_ENV !== "development") {
// }
console.log("browser", (<any>process).browser, process.env.NODE_ENV);
// Polyfill fetch() on the server (used by apollo-client)
if (!(<any>process).browser) {
  (<any>global).fetch = fetch;
}

// http://localhost:4000/api/graphql

function create(initialState: any) {
  const link = new HttpLink({
    uri: "https://node-webtoon.appspot.com/api/graphql",
    credentials: "same-origin",
    // fetch,
  });

  return new ApolloClient({
    connectToDevTools: (<any>process).browser,
    ssrMode: true, //!process.browser, // Disables forceFetch on the server (so queries are only run once)
    link,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState?: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!(<any>process).browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
