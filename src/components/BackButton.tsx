/** @jsx jsx */
import React from 'react';
import { navigate } from 'gatsby';
import { jsx } from 'theme-ui';
import { ArrowLeft } from '@components/icons';

declare global {
  interface Window {
    prevLocation: string;
  }
}

const BackButton: React.FC<{}> = () => {
  const hasWindowObject = typeof window !== `undefined`;

  function goBack(): void {
    if (hasWindowObject && window.prevLocation) {
      window.history.go(-1);
    } else {
      navigate(`/`);
    }
  }

  if (hasWindowObject && window.location.pathname !== `/`) {
    return (
      <button
        type="button"
        onClick={goBack}
        sx={{
          border: `none`,
          background: `none`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          color: `secondary`,
          cursor: `pointer`,
          marginLeft: 8,
          ':hover': {
            color: `white`,
            textDecoration: `underline`,
            svg: {
              color: `accent`,
            },
          },
        }}
      >
        <ArrowLeft size={15} sx={{ marginRight: 3 }} />
        <span sx={{ fontSize: 2 }}>voltar</span>
      </button>
    );
  }

  return null;
};

export default BackButton;
