import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Input,
  BoxPrefix,
  Prefix,
} from './styles';

const mask = [
  /\d/, /\d/, /\d/, ',',
  /\d/, /\d/, /\d/, ',',
  /\d/, /\d/, /\d/, ',',
  /\d/, /\d/, /\d/, ',',
  /\d/, /\d/, /\d/, ',',
  /\d/, /\d/, /\d/, '.', /\d/, /\d/,
].reverse();

const MonetaryInput = ({
  disabled,
  onChange,
  value,
  maxDigits,
}) => {
  const [newValue, setNewValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    const valueString = value.replace(/[,]/g, '');
    let valorFloat = 0.0;

    if (valueString !== '' && valueString.replace(/0|[,]/g, '') !== '') {
      valorFloat = parseFloat(valueString);
    }

    setNewValue(
      valorFloat.toFixed(2)
        .toString(),
    );
  }, [value]);

  const pipe = (conformedValue, config) => {
    const digits = config.rawValue.split('').filter((c) => c >= '0' && c <= '9');

    if (digits.length === 0) {
      return '';
    }
    if (digits.length === 1) {
      return `${digits[0]}`;
    }
    const cents = digits.slice(digits.length - 2).join('');
    if (digits.length === 2) {
      return `${cents}`;
    }
    const dollars = digits.slice(0, digits.length - 2).join('').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${dollars}.${cents}`;
  };

  return (
    <Container>
      <BoxPrefix className="prefix">
        <Prefix>$</Prefix>
      </BoxPrefix>
      <Input
        type="tel"
        mask={mask}
        keepCharPositions={false}
        pipe={pipe}
        ref={inputRef}
        value={newValue}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxDigits}
      />
    </Container>
  );
};

MonetaryInput.defaultProps = {
  disabled: false,
  maxDigits: 15,
};

MonetaryInput.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  maxDigits: PropTypes.number,
};

export default MonetaryInput;
