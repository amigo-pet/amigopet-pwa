import styled from "@emotion/styled";
import { css } from "@emotion/react";

type InputStyledProps = {
  variant: string;
};

const Input = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  background-color: transparent;
  border: 0;

  &:focus {
    outline: none;
  }
`;

const Container = styled.div<InputStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  ${({ theme, variant }) =>
    css({
      ...theme?.input[variant as keyof typeof theme.input],
    })}
`;

const Icon = styled.div`
  flex: 0 0;
`;

export default {
  Container,
  Input,
  Icon,
};
/* box-sizing: border-box;
min-height: 2.25rem;
padding: 0;
padding-left: 1rem;
border: double 0.063rem transparent;
border-radius: 0.5rem;
background-image: linear-gradient(white, white),
linear-gradient(92.76deg, #db4065 2.46%, #fa6e4c 105.67%);
background-origin: border-box;
background-clip: padding-box, border-box;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1rem;
color: #454444; */
