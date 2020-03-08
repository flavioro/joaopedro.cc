import React from 'react';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
  color?: string;
  children?: React.ReactNode;
}

const IconBase: React.FC<IconBaseProps> = ({
  size,
  color,
  children,
  ...rest
}) => {
  const computedSize = size || `1em`;

  return (
    <svg
      width={computedSize}
      height={computedSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default IconBase;
