import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const InputOtpStyled = styled.input`
  height: 35px;
  width: 30px;
  text-align: center;

   ${({ theme, variant }) =>
    css({
      ...theme?.input[variant],
    })}
`;
