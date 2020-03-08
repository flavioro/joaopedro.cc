/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import Layout from '@components/Layout';
import Me from '@components/Me';

const Home: React.FC<{}> = () => {
  return (
    <Layout>
      <h1
        sx={{
          color: `primary`,
          fontFamily: `heading`,
          marginTop: `9`,
          maxWidth: 581,
        }}
      >
        Conteúdos sobre programação e carreira.
      </h1>

      <Me />
    </Layout>
  );
};

export default Home;
