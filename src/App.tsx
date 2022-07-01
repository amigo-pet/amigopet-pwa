import { gql, useQuery } from "@apollo/client";
import { Header } from "./components/common/header/header";
import { Main } from "./components/common/main/main";
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
    <>
      <Header></Header>
      <Main>
        <Routes />
      </Main>
    </>
  );
}

export default App;
