import { gql, useQuery } from "@apollo/client";
import { Header } from "./components/common/icon/header/header";
import { Icon } from "./components/common/icon/icon";

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
  // const { data } = useQuery<{ pets: Pets[] }>(GET_PETS_QUERY);

  return <Header></Header>
}

export default App;
