import React from 'react';
import { Container } from '@theme-ui/components';

import Header from '@components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container p={4} sx={{ variant: `styles` }}>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
