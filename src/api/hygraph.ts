import { GraphQLClient } from "graphql-request";

export const hygraphAPI = new GraphQLClient(import.meta.env.VITE_HYGRAPH_API_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_API_TOKEN}`
  }
});
