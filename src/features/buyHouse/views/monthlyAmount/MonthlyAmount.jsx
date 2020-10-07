import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { calcMonthlyAmount, formatMoney } from '../../../../shared/functions/utils';
import {
  Container,
  BoxMessage,
  Paragraph,
  BoxAmount,
  TextAmount,
  Amount,
} from './styles';

const MonthlyAmount = ({
  amountMonth,
  amount,
}) => {
  const newMoment = moment().add(amountMonth, 'months');

  return (
    <Container>
      <BoxAmount>
        <TextAmount>Monthly amount</TextAmount>
        <Amount>{calcMonthlyAmount(amount, amountMonth)}</Amount>
      </BoxAmount>
      <BoxMessage>
        <Paragraph>
          {"You're planning "}
          <strong>
            {`${amountMonth} monthly deposits `}
          </strong>
          {' to reach your '}
          <strong>{`$${formatMoney(amount)}`}</strong>
          {' goal by '}
          <strong>{newMoment.format('MMMM YYYY')}</strong>
        </Paragraph>
      </BoxMessage>
    </Container>
  );
};

MonthlyAmount.propTypes = {
  amountMonth: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default MonthlyAmount;
