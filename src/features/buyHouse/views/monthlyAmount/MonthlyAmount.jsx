import React from 'react';

import {
  Container,
  BoxMessage,
  Paragraph,
  BoxAmount,
  TextAmount,
  Amount,
} from './styles';

const MonthlyAmount = () => (
  <Container>
    <BoxAmount>
      <TextAmount>Monthly amount</TextAmount>
      <Amount>$521</Amount>
    </BoxAmount>
    <BoxMessage>
      <Paragraph>
        {"You're planning "}
        <strong>48 monthly deposits</strong>
        {' to reach your '}
        <strong>$25,000</strong>
        {' goal by '}
        <strong>October 20202</strong>
      </Paragraph>
    </BoxMessage>
  </Container>
);

export default MonthlyAmount;
