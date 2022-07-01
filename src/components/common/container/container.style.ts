import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ContainerStyledProps = {
  center: boolean;
};

export const ContainerStyled = styled.div<ContainerStyledProps>`
  padding: 1rem;
  ${(props) =>
    props?.center &&
    css({
      display: "flex",
      justifyContent: "center",
    })}
`;
