type IconProps = {
  name: string;
  color?: string;
  rotate?: string;
  className?: string;
};

export const Icon = ({ name, className, ...props }: IconProps) => {
  return <i className={`${name} ${className}`} {...props} />;
};
