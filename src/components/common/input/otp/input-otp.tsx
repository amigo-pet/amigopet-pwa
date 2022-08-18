import { InputHTMLAttributes } from "react";
import { InputOtpStyled } from "./input-otp.style";

type InputOtpProps = {
  icon?: JSX.Element;
  variant: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputOtp = (props: InputOtpProps) => {
  return <InputOtpStyled {...props} />;
};
