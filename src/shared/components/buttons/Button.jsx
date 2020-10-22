import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

const Button = ({
  children,
  onClick,
  style,
}) => (
  <Container
    test-id="container-button"
    onClick={onClick}
    style={style}
  >
    {children}
  </Container>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
};

Button.defaultProps = {
  style: {},
};

export default Button;
