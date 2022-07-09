import { gql } from "@apollo/client";

export const ADD_PET_MUTATION = gql`
  mutation createPet($gender: Gender, $name: String, $birthDate: Date) {
    createPet(data: { gender: $gender, name: $name, birthDate: $birthDate }) {
      birthDate
      name
      gender
    }
  }
`;
