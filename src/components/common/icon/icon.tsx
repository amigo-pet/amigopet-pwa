type IconProps = {
  name: string;
};

export const Icon = ({ name }: IconProps) => {
  return <span className="material-symbols-rounded">{name}</span>;
};
