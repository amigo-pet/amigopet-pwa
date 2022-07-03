import { ReactNode } from "react";
import { ButtonStyled } from "./button.style";

type ButtonPros = {
  children: ReactNode;
  variant?: "filled" | "ghost";
  icon?: JSX.Element;
  loading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  children,
  variant,
  icon,
  loading = false,
  disabled = false,
  ...rest
}: ButtonPros) => {
  return (
    <ButtonStyled
      variant={variant}
      icon={icon}
      loading={loading}
      disabled={loading || disabled}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};
