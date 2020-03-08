/** @jsx jsx */
import React from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Flex } from '@theme-ui/components';

const Me: React.FC<{}> = () => {
  const {
    theme: { colors },
  } = useThemeUI();

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 64, height: 64, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div sx={{ marginLeft: 9, marginTop: 7 }}>
      <Link
        to="/sobre-mim"
        sx={{
          color: `inherit`,
          '&:hover': {
            '.avatar': {
              boxShadow: `0 0 25px ${colors?.accent}`,
            },
            div: {
              span: {
                textDecorationColor: `${colors?.primary}`,
                span: {
                  textDecorationColor: `${colors?.accent}!important`,
                },
              },
            },
          },
        }}
      >
        <Flex sx={{ alignItems: `center` }}>
          <Img
            className="avatar"
            fixed={data.file.childImageSharp.fixed}
            sx={{
              transition: `box-shadow 0.5s`,
              borderRadius: `50%`,
              borderWidth: `3px`,
              borderStyle: `solid`,
              borderColor: `accent`,
              marginRight: 5,
            }}
          />
          <div>
            <span
              sx={{
                fontSize: `3`,
                color: `primary`,
                lineHeight: `heading`,
                fontWeight: `text`,
                transition: `all 0.5s`,
                textDecoration: `underline`,
                textDecorationColor: `transparent`,
              }}
            >
              Criado, escrito e codado <br />
              {` `}
              <span
                sx={{
                  transition: `all 0.5s`,
                  textDecoration: `underline`,
                  textDecorationColor: `transparent`,
                }}
              >
                <b>por João Pedro</b>
              </span>
            </span>
          </div>
        </Flex>
      </Link>
    </div>
  );
};

export default Me;
