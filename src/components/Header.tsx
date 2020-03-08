/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import { Link } from 'gatsby';
import { FiSearch } from 'react-icons/fi';

import logo from '@assets/images/logo.svg';
import HeaderItem from '@components/HeaderItem';
import BackButton from '@components/BackButton';

const Header: React.FC<{}> = () => (
  <header>
    <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `flex-start` }}>
        <Link to="/">
          <img
            src={logo}
            alt="Logotipo do site, que contém as letras J e P"
            title="Ir para a home"
          />
        </Link>
        <BackButton />
      </Flex>
      <ul
        sx={{ display: `flex`, alignItems: `center`, justifyContent: `center` }}
      >
        <HeaderItem to="/">sobre mim</HeaderItem>
        <HeaderItem to="/404">dicas dev</HeaderItem>
        <HeaderItem to="/carreira">carreira</HeaderItem>
        <HeaderItem to="/javascript">javascript</HeaderItem>
        <HeaderItem to="/busca" sx={{ marginLeft: 7, marginRight: 0 }}>
          <FiSearch
            size={20}
            sx={{ verticalAlign: `middle`, color: `inherit` }}
          />
        </HeaderItem>
      </ul>
    </Flex>
  </header>
);

export default Header;
