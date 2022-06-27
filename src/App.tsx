import { gql, useQuery } from "@apollo/client";

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
  const { data } = useQuery<{ pets: Pets[] }>(GET_PETS_QUERY);

  return (
    <>
      {data?.pets.map(({ id, name }) => {
        return <h1 key={id}>{name}</h1>;
      })}
    </>
  );
}

export default App;
