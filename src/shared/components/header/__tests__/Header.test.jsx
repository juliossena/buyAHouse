import { mount } from 'enzyme';
import React from 'react';

import Header from '../Header';

describe('Test Header component', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Header />,
    );
  });

  it('Render success', () => {
    const icon = component.find('[test-id="icon-header"]');
    expect(icon.length).toEqual(1);
  });
});
