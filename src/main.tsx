import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apollo";
import { Global, ThemeProvider } from "@emotion/react";
import App from "./App";
import { style, theme } from "./global";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <Global styles={style} />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>
);
