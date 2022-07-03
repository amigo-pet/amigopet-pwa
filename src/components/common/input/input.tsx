import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { InputStyled } from "./input.style";

type InputProps = {
  icon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const _Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  return <InputStyled ref={ref} {...props} />;
};

export const Input = forwardRef(_Input);
