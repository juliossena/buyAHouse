import { mount } from 'enzyme';
import React from 'react';

import DateInput from '../DateInput';

let amountMonth = 0;
const setAmountMonth = jest.fn((x) => { amountMonth = x; });

describe('Test DateInput component', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <DateInput
        amountMonth={amountMonth}
        setAmountMonth={setAmountMonth}
      />,
    );
  });

  it('Render success', () => {
    const buttonLeft = component.find('[test-id="arrow-left-button"]');
    const buttonRight = component.find('[test-id="arrow-right-button"]');
    expect(buttonLeft.length).toEqual(1);
    expect(buttonRight.length).toEqual(1);
  });

  it('Simule click button right', () => {
    const buttonRight = component.find('[test-id="arrow-right-button"]');
    buttonRight.props().onClick();
    expect(amountMonth).toEqual(1);
  });

  it('Simule click button left', () => {
    amountMonth = 5;
    component = mount(
      <DateInput
        amountMonth={amountMonth}
        setAmountMonth={setAmountMonth}
      />,
    );
    const buttonLeft = component.find('[test-id="arrow-left-button"]');
    buttonLeft.props().onClick();
    expect(amountMonth).toEqual(4);
  });

  it('Simule click button left if amount zero', () => {
    amountMonth = 0;
    component = mount(
      <DateInput
        amountMonth={amountMonth}
        setAmountMonth={setAmountMonth}
      />,
    );
    const buttonLeft = component.find('[test-id="arrow-left-button"]');
    buttonLeft.props().onClick();
    expect(amountMonth).toEqual(0);
  });
});
