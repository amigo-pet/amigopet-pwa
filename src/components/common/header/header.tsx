import { ReactNode } from "react";
import { Icon } from "@components/common";
import { HeaderStyled } from "./header.style";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderStyled>
      <Icon name="chevron_left" />
      {children}
      <Icon name="notifications" />
    </HeaderStyled>
  );
};
