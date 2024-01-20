import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  center?: boolean;
} & CSSProperties &
  HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, ...props }: ContainerProps) => {
  return <section {...props}>{children}</section>;
};
