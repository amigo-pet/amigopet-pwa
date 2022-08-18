import { Icon } from "@components/common";
import { BottomNavigationStyled } from "./bottom.navigation.style";

export const BottomNavigation = () => {
  return (
    <BottomNavigationStyled>
      <Icon name="ph-house-simple" />
      <Icon name="ph-paw-print" />
      <Icon name="ph-question" />
    </BottomNavigationStyled>
  );
};
