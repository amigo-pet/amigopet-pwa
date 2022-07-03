import { gql } from "@apollo/client";

export const GET_PETS_QUERY = gql`
  query {
    pets {
      id
      name
    }
  }
`;
