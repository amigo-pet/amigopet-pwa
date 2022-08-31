import styled from "@emotion/styled";

type IconProps = {
  rotate?: string;
};

export const IconStyled = styled.i<IconProps>`
  font-size: 1.5rem;
  transform: ${props => `rotateX(${props?.rotate}deg)`};
  color: ${props => props.color};
`;
