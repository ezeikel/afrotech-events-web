/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? "https://api.afrotech.events/graphql" : "http://localhost:7777/graphql",
  fetch
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    { element }
  </ApolloProvider>
);