import { Icon } from "../icon/icon";
import { HeaderStyled } from "./header.style";

export const Header = () => {
  return (
    <HeaderStyled>
      <Icon name="chevron_left" />
      <Icon name="notifications" />
    </HeaderStyled>
  );
};
