import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

type ButtonStyledProps = {
  variant?: "filled" | "ghost";
  icon?: JSX.Element;
  isLoading: boolean;
};

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

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
    props.isLoading &&
    css({
      ":disabled": {
        cursor: "not-allowed",
        justifyContent: "normal",
      },
      "&::before": {
        content: "''",
        border: "2px solid #f3f3f3",
        borderRadius: "50%",
        borderTop: "2px solid #3498db",
        width: "20px",
        height: "20px",
        animation: `${spin} 1s linear infinite`,
        margin: "0 auto",
      },
    })}
`;
