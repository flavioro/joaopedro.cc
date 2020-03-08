/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import Link from '@components/Link';

interface LayoutProps {
  children: React.ReactNode;
  to: string;
}

const HeaderItem: React.FC<LayoutProps> = ({ to, children, ...rest }) => {
  return (
    <li sx={{ fontSize: 3, marginRight: 5 }} {...rest}>
      <Link to={to} sx={{ fontFamily: `heading`, color: `secondary` }}>
        {children}
      </Link>
    </li>
  );
};

export default HeaderItem;
