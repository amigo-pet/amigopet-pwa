import { ElementType, ReactNode } from "react";
import { ContainerStyled } from "./container.style";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  center: boolean;
};

export const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>;
};
