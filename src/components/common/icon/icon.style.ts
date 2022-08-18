import styled from "@emotion/styled";

export const IconStyled = styled.i`
  font-size: 1.5rem;
  transform: ${props => `rotateX(${props.rotate}deg)`};
  color: ${props => props.color};
`;
