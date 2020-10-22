import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { formatMoney } from '../../../functions/utils';
import {
  Container,
  Input,
  BoxPrefix,
  Prefix,
} from './styles';

const MoneyInput = ({
  onChange,
  value,
  maxDigits,
  ...inputProps
}) => {
  const [newValue, setNewValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    setNewValue(
      value.toFixed(2)
        .toString(),
    );
  }, [value]);

  const handleOnChange = (event) => {
    const valueEvent = event.target.value.replace('.', '').replace(/,/g, '');

    const lenghtValue = valueEvent.length;
    if (lenghtValue < 1) {
      onChange(0.0);
    } else {
      const valueFloat = parseFloat(`${valueEvent.substring(0, lenghtValue - 2)
      }.${valueEvent.substring(lenghtValue - 2, lenghtValue)}`);
      onChange(valueFloat);
    }
  };

  return (
    <Container>
      <BoxPrefix className="prefix">
        <Prefix>$</Prefix>
      </BoxPrefix>
      <Input
        {...inputProps}
        test-id="input-date"
        type="tel"
        ref={inputRef}
        value={formatMoney(newValue)}
        onChange={handleOnChange}
        maxLength={maxDigits}
      />
    </Container>
  );
};

MoneyInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  maxDigits: PropTypes.number,
};

MoneyInput.defaultProps = {
  maxDigits: 15,
};

export default MoneyInput;
