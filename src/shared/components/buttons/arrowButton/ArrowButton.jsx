import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Icon,
} from './styles';

const ArrowButton = ({
  type,
  onClick,
}) => {
  const typeButton = () => {
    switch (type) {
      case 'left':
        return {
          src: 'img/arrowLeft.svg',
          radius: '4px 0px 0px 4px',
        };
      case 'right':
        return {
          src: 'img/arrowRight.svg',
          radius: '0px 4px 4px 0px',
        };
      default:
        return {
          src: 'img/arrowLeft.svg',
          radius: '4px 0px 0px 4px',
        };
    }
  };

  return (
    <Container
      style={{ borderRadius: typeButton().radius }}
      onClick={onClick}
    >
      <Icon src={typeButton().src} />
    </Container>
  );
};

ArrowButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;
