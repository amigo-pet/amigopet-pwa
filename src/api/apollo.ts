import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4xbo0tw0daf01tdgylv94yc/master",
  cache: new InMemoryCache(),
});
