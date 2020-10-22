import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { formatMoney } from '../../../functions/utils';
import Button from '../Button';
import {
  Container,
  Text,
  Icon,
  Value,
  SubText,
  Month,
} from './styles';

const ButtonHome = ({
  text,
  icon,
  onClick,
  infoLocalStorage,
}) => {
  const renderBottom = () => {
    if (infoLocalStorage) {
      const newMoment = moment().add(infoLocalStorage.amountMonth, 'months');
      return (
        <>
          <Value>
            {`$ ${formatMoney(infoLocalStorage.amount)}`}
          </Value>
          <SubText>
            reach your goal by
          </SubText>
          <Month>
            {newMoment.format('MMMM YYYY')}
          </Month>
        </>
      );
    }

    return (
      <Button
        onClick={onClick}
        style={{ height: 40, marginTop: 24 }}
      >
        Start setup
      </Button>
    );
  };

  return (
    <Container>
      <Icon src={icon} />
      <Text>
        {text}
      </Text>
      {renderBottom()}
    </Container>
  );
};

ButtonHome.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  infoLocalStorage: PropTypes.shape({
    amountMonth: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default ButtonHome;
