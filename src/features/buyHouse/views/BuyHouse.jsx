import React from 'react';

import Button from '../../../shared/components/button/Button';
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

const BuyHouse = () => (
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
      <AmountAndDate />
      <MonthlyAmount />
      <BoxButton>
        <Button>
          Confirm
        </Button>
      </BoxButton>
    </Box>
  </Container>
);

export default BuyHouse;
