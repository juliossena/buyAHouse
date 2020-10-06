import React from 'react';

import MonetaryInput from '../../../../shared/components/input/MonetaryInput';
import {
  Container,
  Amount,
  Date,
  InfoBox,
} from './styles';

const AmountAndDate = () => (
  <Container>
    <Amount>
      <InfoBox>
        Total amount
      </InfoBox>
      <MonetaryInput value="0.0" />
    </Amount>
    <Date>
      <InfoBox>
        Reach goal by
      </InfoBox>
      <MonetaryInput value="0.0" />
    </Date>
  </Container>
);

export default AmountAndDate;
