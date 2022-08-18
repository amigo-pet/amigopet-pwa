import { css } from "@emotion/react";
import styled from "@emotion/styled";

type TextStyledProps = {
  size?: "md" | "lg";
  color?: "blue" | "gray" | "white";
};

export const TextStyled = styled.p<TextStyledProps>`
  margin: 0.5rem 0;
  ${props =>
    css({
      ...props.theme.text[props.size],
      color: props.theme.color[props.color],
    })}
`;
