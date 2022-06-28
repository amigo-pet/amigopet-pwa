import { Icon } from "../icon";
import { HeaderStyled } from "./header.style";

export const Header = () => {
  return (
    <HeaderStyled>
      <Icon name="chevron_left" />
      <Icon name="notifications" />
    </HeaderStyled>
  );
};
