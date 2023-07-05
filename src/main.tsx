import { ApolloProvider } from "@apollo/client";
import { Global, ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { client } from "./api/apollo";
import { queryClient } from "./api/query";
import App from "./App";
import { style, theme } from "./global";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <QueryClientProvider client={queryClient}>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </ApolloProvider>,
);
