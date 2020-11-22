import React from 'react';
import { shallow } from 'enzyme';
import { Store } from 'Store';
import Card from './index';

test('Render Build Card Snapshot', () => {
  const component = shallow(
    <Store>
      <Card />
    </Store>
  );
  expect(component).toMatchSnapshot();
});
