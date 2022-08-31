import { ReactNode } from "react";
import { CardStyled } from "./card.style";

type CardProps = {
  background: "gradient" | "blue";
  variant?: string;
  children: ReactNode;
};

export const Card = ({ children, background, variant }: CardProps) => {
  return (
    <CardStyled variant={variant} background={background}>
      {children}
    </CardStyled>
  );
};
