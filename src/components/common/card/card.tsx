import { ReactNode } from "react";
import { CardStyled } from "./card.style";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <CardStyled>{children}</CardStyled>;
};
