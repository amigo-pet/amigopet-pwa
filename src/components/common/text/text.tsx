import { ReactNode } from "react";

type TextProps = {
  size?: "md" | "lg";
  color?: "blue" | "gray" | "white";
  children: ReactNode;
};

export const Text = ({ children }: TextProps) => {
  return <p>{children}</p>;
};
