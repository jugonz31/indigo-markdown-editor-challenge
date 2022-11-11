type Props = {
  children: string;
  variant?: 'h1' | 'h2' | 'h3';
  additionalClassName?: string;
};

const Title = ({ children, variant, additionalClassName }: Props) => {
  const variantSwitch = () => {
    switch (variant) {
      default:
      case 'h1':
        return <h1 className={additionalClassName}>{children}</h1>;
      case 'h2':
        return <h2 className={additionalClassName}>{children}</h2>;
      case 'h3':
        return <h3 className={additionalClassName}>{children}</h3>;
    }
  };

  return variantSwitch();
};

export default Title;
