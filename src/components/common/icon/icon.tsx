import { IconStyled } from "./icon.style";

type IconProps = {
  name: string;
};

export const Icon = ({ name }: IconProps) => {
  return <IconStyled className="material-symbols-rounded">{name}</IconStyled>;
};
