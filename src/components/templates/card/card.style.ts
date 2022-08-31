import { css } from "@emotion/react";
import styled from "@emotion/styled";

type CardStyledProps = {
  background: "gradient" | "blue";
  variant?: string;
};

export const CardStyled = styled.div<CardStyledProps>`
  ${props =>
    css({
      ...(props.theme.card[props.variant as keyof typeof props.theme.card] ||
        props.theme.card.default),
    })}
  width: 18.5rem;
  height: 17rem;
  background: ${props =>
    props.background == "gradient"
      ? "linear-gradient(92.76deg, #db4065 2.46%, #fa6e4c 105.67%)"
      : "red"};
  box-shadow: 0px 7px 25px rgba(9, 64, 116, 0.07),
    0px 4.1216px 13.04px rgba(9, 64, 116, 0.050624),
    0px 2.1168px 6.12px rgba(9, 64, 116, 0.039312),
    0px 0.8512px 2.68px rgba(9, 64, 116, 0.030688),
    0px 0.1904px 1.16px rgba(9, 64, 116, 0.019376);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
