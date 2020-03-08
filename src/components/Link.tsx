/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

interface LayoutProps {
  children: React.ReactNode;
  to: string;
}

const CustomLink: React.FC<LayoutProps> = ({ to, children, ...rest }) => {
  return (
    <Link
      {...rest}
      to={to}
      activeClassName="active"
      sx={{
        color: `inherit`,
        '&:hover': {
          color: `white`,
          textDecoration: `underline`,
        },
        '&.active': {
          color: `accent`,
        },
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
