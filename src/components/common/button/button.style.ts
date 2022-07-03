import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ButtonStyledProps = {
  variant?: "filled" | "ghost";
  icon?: JSX.Element;
  loading: boolean;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(92.76deg, #db4065 2.46%, #fa6e4c 105.67%);
  border-radius: 0.5rem;
  min-width: 18.125rem;
  width: 100%;
  height: 2.25rem;
  color: #ffffff;

  ${props =>
    props.loading &&
    css({
      ":disabled": {
        cursor: "not-allowed",
      },
      "::before": {
        content: '"LOADING"',
      },
    })}
`;
