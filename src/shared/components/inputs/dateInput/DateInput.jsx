import React, { useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import ArrowButton from '../../buttons/arrowButton/ArrowButton';
import {
  Container,
  BoxDate,
  Month,
  Year,
} from './styles';

const DateInput = ({
  amountMonth,
  setAmountMonth,
  blockChangeDate,
}) => {
  const newMoment = moment().add(amountMonth, 'months');

  const handlePreviousMonth = () => {
    if (amountMonth > 1) {
      setAmountMonth(amountMonth - 1);
    }
  };

  const handleNextMonth = () => {
    setAmountMonth(amountMonth + 1);
  };

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 37:
        handlePreviousMonth();
        break;
      case 39:
        handleNextMonth();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!blockChangeDate) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => null;
  });

  return (
    <Container>
      <ArrowButton
        test-id="arrow-left-button"
        type="left"
        onClick={handlePreviousMonth}
      />
      <BoxDate>
        <Month>
          {newMoment.format('MMMM')}
        </Month>
        <Year>
          {newMoment.format('YYYY')}
        </Year>
      </BoxDate>
      <ArrowButton
        test-id="arrow-right-button"
        type="right"
        onClick={handleNextMonth}
      />
    </Container>
  );
};

DateInput.propTypes = {
  amountMonth: PropTypes.number.isRequired,
  setAmountMonth: PropTypes.func.isRequired,
  blockChangeDate: PropTypes.bool.isRequired,
};

export default DateInput;
