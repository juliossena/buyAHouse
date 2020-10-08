import { mount } from 'enzyme';
import React from 'react';

import AmountAndDate from '../AmountAndDate';

describe('Test AmountAndDate component', () => {
  let component;
  let amountMonth = 0;
  const setAmountMonth = jest.fn((x) => { amountMonth = x; });
  let amount = 0.0;
  const setAmount = jest.fn((x) => { amount = x; });
  beforeEach(() => {
    component = mount(
      <AmountAndDate
        amountMonth={amountMonth}
        setAmountMonth={setAmountMonth}
        amount={amount}
        setAmount={setAmount}
      />,
    );
  });

  it('Render success', () => {
    const moneyInput = component.find('[test-id="money-input"]');
    const dateInput = component.find('[test-id="date-input"]');
    expect(moneyInput.length).toEqual(1);
    expect(dateInput.length).toEqual(1);
  });
});
