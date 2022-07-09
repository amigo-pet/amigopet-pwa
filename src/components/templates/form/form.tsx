import {
  BaseSyntheticEvent,
  FormHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";
import { FormStyled } from "./form.style";

type FormProps = {
  children: ReactNode;
} & FormHTMLAttributes<HTMLElement>;

const _Form: ForwardRefRenderFunction<HTMLFormElement, FormProps> = (
  { children, ...props },
  ref
) => {
  return (
    <FormStyled ref={ref} {...props}>
      {children}
    </FormStyled>
  );
};

export const Form = forwardRef(_Form);
