import React, { useState } from 'react';
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
}) => {
  const [blockChangeDate, setBlockChangeDate] = useState(false);

  return (
    <Container>
      <Amount>
        <InfoBox>
          Total amount
        </InfoBox>
        <MoneyInput
          test-id="money-input"
          value={amount}
          onChange={setAmount}
          onFocus={() => setBlockChangeDate(true)}
          onBlur={() => setBlockChangeDate(false)}
        />
      </Amount>
      <Date>
        <InfoBox>
          Reach goal by
        </InfoBox>
        <DateInput
          test-id="date-input"
          amountMonth={amountMonth}
          setAmountMonth={setAmountMonth}
          blockChangeDate={blockChangeDate}
        />
      </Date>
    </Container>
  );
};

AmountAndDate.propTypes = {
  amountMonth: PropTypes.number.isRequired,
  setAmountMonth: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default AmountAndDate;
