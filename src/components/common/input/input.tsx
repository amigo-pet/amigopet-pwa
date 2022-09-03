import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import I from "./input.style";

type InputProps = {
  icon?: JSX.Element;
  variant: string;
} & InputHTMLAttributes<HTMLInputElement>;

const _Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { icon, variant, ...props },
  ref,
) => {
  return (
    <I.Container variant={variant} {...props}>
      {Boolean(icon) && icon}
      <I.Input ref={ref} {...props} />
    </I.Container>
  );
};

export const Input = forwardRef(_Input);
