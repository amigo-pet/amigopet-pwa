import { ReactNode } from "react";
import { ButtonStyled } from "./button.style";

type ButtonProps = {
  children: ReactNode;
  variant?: "filled" | "ghost";
  icon?: JSX.Element;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  children,
  variant,
  icon,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonStyled
      variant={variant}
      icon={icon}
      isLoading={Boolean(isLoading)}
      disabled={Boolean(isLoading) || Boolean(disabled)}
      {...rest}
    >
      {!isLoading && children}
    </ButtonStyled>
  );
};
