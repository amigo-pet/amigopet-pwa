import { InputHTMLAttributes } from "react";

type InputOtpProps = {
  icon?: JSX.Element;
  variant: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputOtp = (props: InputOtpProps) => {
  return <input {...props} />;
};
