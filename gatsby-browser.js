/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? "https://api.afrotech.events/graphql" : "http://localhost:7777/graphql",
});

client
  .query({
    query: gql`
      {
        events {
          id
          address
        }
      }
    `
  })
  .then(result => console.log(result));

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      { element }
    </ApolloProvider>
  );
};