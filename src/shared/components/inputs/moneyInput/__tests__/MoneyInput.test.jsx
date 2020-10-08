import React from 'react';
import { mount } from 'enzyme';
import MoneyInput from '../MoneyInput';

describe('Test MoneyInput', () => {
  let component;
  let value = 0.0;
  const onChange = jest.fn((x) => { value = x; });
  const maxDigits = 13;
  beforeEach(() => {
    component = mount(
      <MoneyInput
        value={value}
        onChange={onChange}
        maxDigits={maxDigits}
      />,
    );
  });

  it('Render success', () => {
    const input = component.find('[test-id="input-date"]');
    expect(input.length).toEqual(1);
  });

  it('Change input valid number', () => {
    const event = {
      target: {
        value: '0.001',
      },
    };
    const input = component.find('[test-id="input-date"]');
    input.props().onChange(event);
    expect(value).toEqual(0.01);
  });

  it('Change input empty', () => {
    const event = {
      target: {
        value: '',
      },
    };
    const input = component.find('[test-id="input-date"]');
    input.props().onChange(event);
    expect(value).toEqual(0.0);
  });
});
