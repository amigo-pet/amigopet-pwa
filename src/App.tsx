<<<<<<< HEAD
import { gql, useQuery } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/common/header/header";
import { Main } from "./components/common/main/main";
import { theme } from "./global/theme";
=======
import { Header } from "@components/common/header/header";
import { Main } from "@components/common/main/main";
>>>>>>> 3879061f87090f69d9cfc1f95430a27c9c1fde2e
import { Routes } from "./routes/route";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Main>
        <Routes />
      </Main>
    </ThemeProvider>
  );
}

export default App;
