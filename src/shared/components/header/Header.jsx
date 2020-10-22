import React from 'react';

import {
  Container,
  Icon,
} from './styles';

const Header = () => (
  <Container>
    <a href="/">
      <Icon
        test-id="icon-header"
        src="/img/logo.svg"
      />
    </a>
  </Container>
);

export default Header;
