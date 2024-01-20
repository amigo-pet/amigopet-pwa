import { Card } from "@/components/ui/card";
import { Pet } from "@/entities/pet";
import { useLoaderData } from "react-router-dom"

export const Pets = () => {
  const petsData = useLoaderData() as Pet[];

  return (
    <div className="grid h-full max-w-lg mx-auto">
      <ul>
        {petsData.map(pet => {
          return (
            <li key={pet.id}>
              <Card>
                {pet.name}
              </Card>
            </li>
          )
        })}
      </ul>
    </div>
  )
}