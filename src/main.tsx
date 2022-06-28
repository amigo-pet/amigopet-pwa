import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apollo";
import { Global } from "@emotion/react";
import App from "./App";
import style from "./global/style";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Global styles={style} />
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
