import { mount } from 'enzyme';
import React from 'react';

import Button from '../Button';

const onClick = jest.fn();
describe('Test Button component', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Button
        onClick={onClick}
      >
        text
      </Button>,
    );
  });

  it('Render success', () => {
    const button = component.find('[test-id="container-button"]');
    expect(button.length).toEqual(1);
  });

  it('Simule click Button', () => {
    const button = component.find('[test-id="container-button"]');
    button.props().onClick();
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
