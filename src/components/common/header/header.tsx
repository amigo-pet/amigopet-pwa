import { ReactNode } from "react";
import { Icon } from "@/components/common";
import { HeaderStyled } from "./header.style";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderStyled>
      <Icon name="ph-caret-left" />
      {children}
      <Icon name="ph-notification" />
    </HeaderStyled>
  );
};
