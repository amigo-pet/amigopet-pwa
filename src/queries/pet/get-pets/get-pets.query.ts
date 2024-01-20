import type { QueryClient } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { hygraphAPI } from "@/api/hygraph";

interface Pet {
  id: string,
  name: string
}

interface PetsResponse {
  pets: Array<Pet>
}

export const GET_PETS_BY_OWNER_QUERY = gql`
  query {
    pets(where: {ownerId: "26ddfc6c-4193-41e2-873f-bc4586c37081"}) {
      id
      name
    }
  }
`;

const getPetsByOwnerQuery = (id: string) => ({
  queryKey: ['pets', 'by-owner', id],
  queryFn: async (): Promise<Pet[]> => {
    const { pets } = await hygraphAPI.request<PetsResponse>(GET_PETS_BY_OWNER_QUERY)
    console.log("DATA", pets);
    return pets;
  },
})

export const loader = (queryClient: QueryClient) =>
  async (): Promise<Pet[]> => {
    const query = getPetsByOwnerQuery("Teste");
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    )
  }