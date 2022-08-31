import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { ContainerStyled } from "./container.style";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  center?: boolean;
} & CSSProperties &
  HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>;
};
