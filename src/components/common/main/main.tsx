import { ReactNode } from "react";
import { Container } from "@components/common";

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return <Container as="main">{children}</Container>;
};
