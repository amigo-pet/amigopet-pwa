import { css } from "@emotion/react";
import styled from "@emotion/styled";

type TextStyledProps = {
  type?: "title" | "subTitle",
  color?: "blue" | "gray" | "white"
};

export const TextStyled = styled.p<TextStyledProps>`
  ${props => css({
  ...props.theme.text[props.type],
  color: props.theme.color[props.color]
})}      
`;


