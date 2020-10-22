import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { insertInfoStorage } from '../../../shared/functions/infoStorage';
import { infoButtons } from '../../../shared/functions/constants';
import Button from '../../../shared/components/buttons/Button';
import AmountAndDate from './amountAndDate/AmountAndDate';
import MonthlyAmount from './monthlyAmount/MonthlyAmount';
import {
  Container,
  Info,
  SubTitle,
  Box,
  Img,
  Title,
  BoxButton,
} from './styles';

const BuyHouse = ({ match }) => {
  const history = useHistory();
  const infoSelected = infoButtons.find((info) => info.id === window.parseInt(match.params.id));

  const [amountMonth, setAmountMonth] = useState(1);
  const [amount, setAmount] = useState(0.0);

  const saveInfoStorageAndGoToHome = () => {
    insertInfoStorage({
      id: window.parseInt(match.params.id),
      amount,
      amountMonth,
    });
    history.push('/');
  };

  return (
    <Container>
      <Info>
        {"Let's plan your "}
        <strong>saving goal</strong>
      </Info>
      <Box>
        <Img src={infoSelected.icon} />
        <Title>
          {infoSelected.title}
        </Title>
        <SubTitle>
          Saving goal
        </SubTitle>
        <AmountAndDate
          amountMonth={amountMonth}
          setAmountMonth={setAmountMonth}
          amount={amount}
          setAmount={setAmount}
        />
        <MonthlyAmount
          amountMonth={amountMonth}
          amount={amount}
        />
        <BoxButton>
          <Button onClick={saveInfoStorageAndGoToHome}>
            Confirm
          </Button>
        </BoxButton>
      </Box>
    </Container>
  );
};

BuyHouse.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BuyHouse;
