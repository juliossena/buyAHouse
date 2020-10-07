import React from 'react';
import PropTypes from 'prop-types';

import MoneyInput from '../../../../shared/components/inputs/moneyInput/MoneyInput';
import DateInput from '../../../../shared/components/inputs/dateInput/DateInput';
import {
  Container,
  Amount,
  Date,
  InfoBox,
} from './styles';

const AmountAndDate = ({
  amountMonth,
  setAmountMonth,
  amount,
  setAmount,
}) => (
  <Container>
    <Amount>
      <InfoBox>
        Total amount
      </InfoBox>
      <MoneyInput value={amount} onChange={setAmount} />
    </Amount>
    <Date>
      <InfoBox>
        Reach goal by
      </InfoBox>
      <DateInput
        amountMonth={amountMonth}
        setAmountMonth={setAmountMonth}
      />
    </Date>
  </Container>
);

AmountAndDate.propTypes = {
  amountMonth: PropTypes.number.isRequired,
  setAmountMonth: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default AmountAndDate;
