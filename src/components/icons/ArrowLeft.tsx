import React from 'react';

import IconBase, { IconBaseProps } from './IconBase';

const BackArrow: React.FC<IconBaseProps> = props => {
  return (
    <IconBase viewBox="0 0 17 17" {...props}>
      <g
        clipPath="url(#back_svg__clip0)"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M.75 8.25L8.625.75v15L.75 8.25zM9 8h7" />
      </g>
      <defs>
        <clipPath id="back_svg__clip0">
          <path fill="currentColor" d="M0 0h16.845v16.5H0z" />
        </clipPath>
      </defs>
    </IconBase>
  );
};

export default BackArrow;
