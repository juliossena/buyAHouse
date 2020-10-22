import { shallow } from 'enzyme';
import React from 'react';

import ButtonHome from '../ButtonHome';

const onClick = jest.fn();
describe('Test Button component', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <ButtonHome
        text="Text"
        icon="link/Icon"
        onClick={onClick}
      />,
    );
  });

  it('Render success', () => {
    const button = component.find('[test-id="container-button-home"]');
    expect(button.length).toEqual(1);
  });

  it('Render show button', () => {
    const button = component.find('[test-id="button-button-home"]');
    expect(button.length).toEqual(1);
  });

  it('Simule click Button', () => {
    const button = component.find('[test-id="button-button-home"]');
    button.props().onClick();
    expect(onClick.mock.calls.length).toEqual(1);
  });

  it('Render show info', () => {
    component = shallow(
      <ButtonHome
        text="Text"
        icon="link/Icon"
        onClick={onClick}
        infoLocalStorage={{}}
      />,
    );
    const button = component.find('[test-id="button-button-home"]');
    const value = component.find('[test-id="value-button-home"]');
    expect(button.length).toEqual(0);
    expect(value.length).toEqual(1);
  });
});
