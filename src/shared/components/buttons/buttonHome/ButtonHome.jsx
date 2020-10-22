import React from 'react';
import PropTypes, { object } from 'prop-types';

import Button from '../Button';
import {
  Container,
  Text,
  Icon,
} from './styles';

const ButtonHome = ({
  text,
  icon,
  onClick,
}) => (
  <Container>
    <Icon src={icon} />
    <Text>
      {text}
    </Text>
    <Button
      onClick={onClick}
      style={{ height: 40 }}
    >
      Start setup
    </Button>
  </Container>
);

ButtonHome.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ButtonHome;
