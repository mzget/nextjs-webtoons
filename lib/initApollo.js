import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "node-fetch";
let apolloClient = null;
// if (process.env.NODE_ENV !== "development") {
// }
console.log("browser", process.browser, process.env.NODE_ENV);
// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
    global.fetch = fetch;
}
// http://localhost:4000/api/graphql
function create(initialState) {
    const link = new HttpLink({
        uri: "https://node-webtoon.appspot.com/api/graphql",
        credentials: "same-origin",
    });
    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: true,
        link,
        cache: new InMemoryCache().restore(initialState || {}),
    });
}
export default function initApollo(initialState) {
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
