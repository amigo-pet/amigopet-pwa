import { gql, useQuery } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/common/header/header";
import { Main } from "./components/common/main/main";
import { theme } from "./global/theme";
import { Routes } from "./routes/route";

const GET_PETS_QUERY = gql`
  query {
    pets {
      id
      name
    }
  }
`;

type Pets = {
  id: string;
  name: string;
};

function App() {
  useQuery<{ pets: Pets[] }>(GET_PETS_QUERY);

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
