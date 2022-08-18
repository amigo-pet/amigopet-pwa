import { IconStyled } from "./icon.style";

type IconProps = {
  name: string;
  color?: string;
  rotate: string;
};

export const Icon = ({ name, ...props }: IconProps) => {
  return <IconStyled className={name} {...props} />;
};
