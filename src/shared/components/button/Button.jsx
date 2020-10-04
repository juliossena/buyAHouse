import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

const Button = ({
  children,
  onClick,
}) => (
  <Container onClick={onClick}>
    {children}
  </Container>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
