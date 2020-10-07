import React, { useState } from 'react';

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

const BuyHouse = () => {
  const [amountMonth, setAmountMonth] = useState(1);
  const [amount, setAmount] = useState(0.0);

  return (
    <Container>
      <Info>
        {"Let's plan your "}
        <strong>saving goal</strong>
      </Info>
      <Box>
        <Img src="img/insuranceAuto.svg" />
        <Title>
          Buy a house
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
          <Button onClick={() => null}>
            Confirm
          </Button>
        </BoxButton>
      </Box>
    </Container>
  );
};

export default BuyHouse;
