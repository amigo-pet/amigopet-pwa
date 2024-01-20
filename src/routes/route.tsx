import { queryClient } from "@/api/query";
import { Root } from "@/layout";
import { loader } from "@/queries/pet/get-pets/get-pets.query";
import { Pets } from "@/views/pets/pets";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>ERROR</div>,
    children: [
      {
        index: true,
        element: <div className="container mt-16"><Pets></Pets></div>,
        loader: loader(queryClient)
      },
      {
        path: "signin",
        element: <div>ROOT</div>,
      },
    ],
  },
]);
