import { ReactNode } from "react";
import { Container } from "../container/container";

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return (
    <Container as="main" center>
      {children}
    </Container>
  );
};
