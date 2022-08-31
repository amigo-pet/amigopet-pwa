import { css } from "@emotion/react";
import styled from "@emotion/styled";

type InputOtpStyledProps = {
  variant: string;
};

export const InputOtpStyled = styled.input<InputOtpStyledProps>`
  height: 35px;
  width: 30px;
  text-align: center;

  ${({ theme, variant }) =>
    css({
      ...theme?.input[variant as keyof typeof theme.input],
    })}
`;
