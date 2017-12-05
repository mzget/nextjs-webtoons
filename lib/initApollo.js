"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_client_1 = require("apollo-client");
const apollo_link_http_1 = require("apollo-link-http");
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const node_fetch_1 = require("node-fetch");
let apolloClient = null;
// Polyfill fetch() on the server (used by apollo-client)
console.log("browser", process.browser);
if (!process.browser) {
    global.fetch = node_fetch_1.default;
}
function create(initialState) {
    const link = new apollo_link_http_1.HttpLink({
        uri: "http://chitchats.ga:4000/api/graphql",
        credentials: "same-origin",
    });
    return new apollo_client_1.ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: true,
        link,
        cache: new apollo_cache_inmemory_1.InMemoryCache().restore(initialState || {}),
    });
}
function initApollo(initialState) {
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
exports.default = initApollo;
